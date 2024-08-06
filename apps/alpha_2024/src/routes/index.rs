use axum::{
    routing::get,
    Router,
};
use crate::handlers::index::index_handler;

pub fn routes() -> Router {
    Router::new().route(
        "/",
        get(index_handler)
    )
}
