# alx-project-0x14

## API Overview
The Movie Database (TMDb) API is a comprehensive, community-driven RESTful service providing metadata for movies, TV shows, actors, and images. It offers powerful search capabilities, multilingual support, rich media assets, and continuously updated content :contentReference[oaicite:0]{index=0}.

## Version
Current stable version: **v3** :contentReference[oaicite:1]{index=1}.

## Available Endpoints
Here are some main TMDb endpoints:
- **/movie/{movie_id}** – Retrieve detailed information about a movie (e.g., title, genres, release date) :contentReference[oaicite:2]{index=2}.
- **/movie/{movie_id}/rating** – Submit, update, or delete a movie rating :contentReference[oaicite:3]{index=3}.
- **/search/movie** – Search for movies by title (similar endpoints for TV, people, collections, etc.) :contentReference[oaicite:4]{index=4}.
- **/configuration** – Obtain system-wide configuration data (like image base URLs and available sizes) :contentReference[oaicite:5]{index=5}.
- **Additional endpoints**: Discover, Genres, People, TV, Collections, Reviews, Discover, and more :contentReference[oaicite:6]{index=6}.

## Request and Response Format
### Example Request:
GET https://api.themoviedb.org/3/movie/27205
Authorization: Bearer YOUR_ACCESS_TOKEN

arduino
Copy
Edit
### Example Successful Response (200 OK):
```
{
  "id": 27205,
  "title": "Inception",
  "genres": [ { "id": 28, "name": "Action" }, ... ],
  "release_date": "2010-07-15",
  "overview": "Cobb, a skilled thief ...",
  ...
} 
```
### Example Error Response (404 Not Found):
```
{
  "status_code": 34,
  "status_message": "The resource you requested could not be found.",
  "success": false
} 
```

## Authentication
- TMDb requires authentication via an API key or Bearer token, which you obtain by signing up for a TMDb account and requesting an API key via the user settings section 

- Include it either via: 
- **Query parameter: ?api_key=YOUR_API_KEY**
- **HTTP header: Authorization: Bearer YOUR_ACCESS_TOKEN**  


## Error Handling
- Common HTTP status codes:
- **401 Unauthorized** – Invalid or missing API key.
- **404 Not Found** – Resource doesn't exist.
- **400 Bad Request** – Invalid parameters (e.g., rating value out of bounds).

- TMDb also provides status_code and status_message fields in the JSON response for granular error handling.

## Usage Limits and Best Practices
- Rate limit: ~40 requests per 10 seconds—plan your request flow accordingly 
Zuplo.
- Always use HTTPS to secure your API calls.
- Use configuration endpoint instead of hardcoding paths for images and other static resources.
- Prefer *GET* for retrieval, *POST* for creating or rating, and *DELETE* for deletion; be aware that TMDb may reuse *POST* for updates (e.g., rating updates) 
Launch School.