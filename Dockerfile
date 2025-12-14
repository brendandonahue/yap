FROM rust:1.92 as builder
WORKDIR /app
COPY . .
RUN cargo build --release -p backend

FROM debian:bookworm-slim
COPY --from=builder /app/target/release/backend /usr/local/bin
CMD ["backend"]