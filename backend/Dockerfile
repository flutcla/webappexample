# ベースイメージの指定
FROM golang

# ワーキングディレクトリの設定
WORKDIR /go/src/app

# 依存関係のコピー
COPY go.mod .
COPY go.sum .

# 依存関係のインストール
RUN go mod download

# アプリケーションのソースコードをコピー
COPY . .

# バイナリをビルド
RUN go build -o main .

# 実行コマンド
CMD ["./main"]
