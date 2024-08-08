mod index;

use axum::{
    routing::{
        get,
        get_service,
    },
    Router,
};
use tower_http::services::ServeDir;

pub fn create_router() -> Router {
    Router::new()
        .merge(index::routes())
        .nest_service(
            "/static", 
            get_service(ServeDir::new("static"))
        );
}
