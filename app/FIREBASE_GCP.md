# GCP でホスティングする方法

## STEP 1 - GCP と firebase をセットアップ

### GCPにログインしデフォルトの資格情報を入手する

```shell
    export PROJ=once-again-guide
    gcloud auth login
    gcloud config set project ${PROJ}
    gcloud auth application-default login
```

### 必要なAPIを有効にする

```shell
    # Enable the Artifact Registry API - storing docker images
    gcloud services enable artifactregistry.googleapis.com

    # Enable the Cloud Run API - running serverless containers for the backend
    gcloud services enable run.googleapis.com
```

### Dockerイメージを構築。イメージの保存場所（アーティファクトレジストリ）を作成する

```shell
    # ロケーションをアジア・東京にする
    export LOC=asia-northeast1
    
    # REMEMBER THE NAME AND REGION, IN LATER STEPS YOU WILL USE THEM
    gcloud artifacts repositories create open-saas \
        --repository-format=docker \
        --location=${LOC} \
        --description="Docker repository for Open SaaS"
```

### （オプション）ファイアベースセットアップを行う場合
* https://console.firebase.google.com にアクセスしてください。
* プロジェクトの追加をクリックし、GCPプロジェクトを選択します。
  * 画面の下に、Google Cloud プロジェクトを選択するためのリンクがある
* ファイアベースコンソールで「続行」をクリックする。

## STEP 2 - ファイアベースホスティングでフロントエンドを展開

フロントエンドのビルドを取得します。
[公式ドキュメントの STEP 1 と 3](https://wasp-lang.dev/docs/0.11.8/advanced/deployment/manually#1-generating-deployable-code) に従ってください。
ただし、 <url_to_wasp_backend> （バックエンドサーバURL）を指定するところは、
まだバックエンドサーバをデプロイしていないので、
フェイクの URL を指定してください。
`https://fake.alizza-ideal.com` など。


### デプロイ用設定ファイルを２つ用意する
まだデプロイしていないのでまだデプロイしていないので
デプロイに必要な設定ファイル firebase.json と.firebaserc を
リポジトリのルート（appディレクトリの上のディレクトリ）に作成します

`firebase.json`

```json
  {
    "hosting": {
      "public": "app/.wasp/build/web-app/build",
      "ignore": [
        "firebase.json",
        "**/.*",
        "**/node_modules/**"
      ]
    }
  }
```

`.firebaserc`

```json
  {
    "projects": {
      "default": {GCPプロジェクト名}
    }
  }
```

### 以上でフロントエンドをデプロイする準備が整いました。

続けて、以下の手順でデプロイしてください。

* Firebase CLI をインストールする： `npm install -g firebase-tools`
* Firebase にログインする： `firebase login`
* レポジトリのルート（`app` ディレクトリのひとつ上）で次のコマンドでデプロイする
  * `firebase deploy --only hosting`
* これで、フロントエンドに次のURLでアクセスできるようになりました。
  * https://{GCPプロジェクト名}.web.app

## STEP 3 - Cloud Run でバックエンドをデプロイする

Cloud Run では、コンテナサービスがポート 8080 に公開されています。
そのため、Dockerがポート 8080 を使うように設定します。

`./app/Dockerfile`

```
  ENV PORT=8080
  EXPOSE 8080

  # ENTRYPOINT ["npm", "run", "start-production"]
```

設定内容を、実際にデプロイされる `.wasp/build/Dockerfile` に反映する。

```shell
    cd {レポジトリ}/app
    wasp build
```

設定内容が反映されたかどうかは、次のコマンドで確認できます。

```shell
    tail .wasp/build/Dockerfile
```

### Dockerイメージを作成し、アーティファクトレジストリにプッシュします

STEP 1 で作成したアーティファクトレジストリを使用します。

```shell
  export LOC=asia-northeast1
  export PRJ=once-again-guide
  cd .wasp/build
  docker build -t backend-image -f Dockerfile .
  # Adapt name and region to the one created earlier
  docker tag backend-image ${LOC}-docker.pkg.dev/${PRJ}/backend/backend-image
    docker push ${LOC}-docker.pkg.dev/${PRJ}/backend/backend-image 
```

イメージがアーティファクトディレクトリにアップロードされると、バックエンドを次のように展開します。

```shell
  gcloud run deploy backend \
            --image ${LOC}-docker.pkg.dev/${PRJ}/backend/backend-image \
            --project ${PRJ} \
            --platform managed \
            --region ${LOC} \
            --max-instances 2 \
            --allow-unauthenticated \
            --set-env-vars "DATABASE_URL=fake_database_url" \
            --set-env-vars "STRIPE_KEY=fake_stripe_key" \
            --set-env-vars "GOOGLE_CLIENT_ID=fake_google_client_id" \
            --set-env-vars "GOOGLE_CLIENT_SECRET=fake_google_client_secret" \
            --set-env-vars "HOBBY_SUBSCRIPTION_PRICE_ID=fake_hobby_subscription_price_id" \
            --set-env-vars "PRO_SUBSCRIPTION_PRICE_ID=fake_pro_subscription_price_id" \
            --set-env-vars "SENDGRID_API_KEY=fake_sendgrid_api_key" \
            --set-env-vars "STRIPE_WEBHOOK_SECRET=fake_stripe_webhook_secret" \
            --set-env-vars "WASP_SERVER_URL=fake_wasp_server_url" \
            --set-env-vars "WASP_WEB_CLIENT_URL=https://${PRJ}.web.app" \
            --set-env-vars "ADMIN_EMAILS=fake_admin_emails" \
            --set-env-vars "JWT_SECRET=fake_jwt_secret"
```
