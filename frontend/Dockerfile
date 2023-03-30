# ベースイメージの指定
FROM node

# ワーキングディレクトリの設定
WORKDIR /app

# 依存関係のコピー
COPY package*.json ./

# 依存関係のインストール
RUN npm install

# アプリケーションのソースコードをコピー
COPY . .

# 開発サーバーの起動コマンド
CMD ["npm", "run", "serve"]