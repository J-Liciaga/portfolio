use askama_axum::Template;

#[derive(Template)]
#[template(path = "screens/index/index.html")]
pub struct IndexTemplate {
    pub location: String,
    pub title: String,
    pub subtitle: String,
    pub about_me: String,
}
