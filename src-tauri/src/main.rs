// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// App Entry Point; first function called when app is launched
fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![greet])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

// TODO: Remove this example function
#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}
