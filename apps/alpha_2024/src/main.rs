mod routes;
mod handlers;
mod models;
mod templates;

use axum::{
    Router,
    Server,
};
use std::net::SocketAddr;

#[tokio::main]
async fn main() {
    let app = routes::create_router();
    let addr = SocketAddr::from(([127,0,0,1], 3000));

    println!("Portfolio Alpha 2024 - Listening on: {}", addr);

    Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();
}
