use axum::response::Html;
use crate::templates::index::IndexTemplate;

pub async fn index_handler() -> Html<String> {
    let template = IndexTemplate {
        name: "Josiah Liciaga-Silva".to_string(),
    };

    Html(template.render().unwrap())
}
