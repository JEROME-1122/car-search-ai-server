"# car-search-ai-server" 
Car Recommendation API
A simple Node.js + Express API that recommends cars based on:

Budget
Fuel Type
Priority (Mileage / Safety)

The API filters cars from a local JSON dataset and returns the top 3 matching recommendations.

Features
Filter cars by budget
Filter cars by fuel type
Recommend based on mileage or safety
Returns top 3 matching cars
REST API built with Express.js
CORS enabled for frontend integration

Tech Stack
Node.js
Express.js
CORS
JSON Dataset

Project Structure
project/
│
├── cars.json
├── server.js
├── package.json
└── README.md


API Endpoints
Home Route

GET /

Returns server status.

Response
{
  "Success": "App runnning"
}



Car Recommendation Route

POST /recommend

Returns the best matching car recommendations.

Request Body
{
  "budget": 1200000,
  "fuel": "Petrol",
  "priority": "safety"
}
 
Example Response
[
  {
    "id": 1,
    "name": "Hyundai i20",
    "price": 1200000,
    "fuel": "Petrol",
    "mileage": 18,
    "safety": 5,
    "score": 5
  }
]



Recommendation Logic
Step 1

Validate incoming request.

budget && fuel && priority
Step 2

Filter cars based on:

Budget
Fuel Type
Step 3

Assign score based on selected priority.

For Mileage:

score = car.mileage;

For Safety:

score = car.safety;
Step 4

Sort cars by score.

Step 5

Return top 3 recommendations.

Sample Dataset
{
  "id": 1,
  "name": "Hyundai i20",
  "price": 1200000,
  "fuel": "Petrol",
  "mileage": 18,
  "safety": 5
}



Deployment
Backend

Deploy on Render

Frontend

Deploy on Netlify



* and i recorded screen record but screen record is not record all works it only record vs code if i leave vs code record hold on the vs code ..

// more  future
1) add image
2) spinner
3) no car found message
4) compare car
5) Groq AI (used but rendering time not able to diplaoyed some security problm not able to update )
6) dark mode light mode
7) fav car
8) 
