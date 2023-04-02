# ベースイメージとして Go を使用
FROM golang:1.20

# 作業ディレクトリの設定
WORKDIR /app

# 依存関係のコピー
COPY go.mod go.sum ./

# 依存関係のインストール
RUN go mod download

# アプリケーションのコピー
COPY . .

# アプリケーションのビルド
RUN go build -o main .

# 開放するポートの指定
EXPOSE 8081

# アプリケーションの実行
CMD ["./main"]
