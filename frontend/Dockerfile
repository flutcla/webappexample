# ベースイメージとして Node.js を使用
FROM node:18.15.0

# 作業ディレクトリの設定
WORKDIR /app

# 依存関係のコピー
COPY package*.json ./

# 依存関係のインストール
RUN npm install

# アプリケーションのコピー
COPY . .

# 開放するポートの指定
EXPOSE 8080

# アプリケーションの実行
CMD ["npm", "run", "serve"]
