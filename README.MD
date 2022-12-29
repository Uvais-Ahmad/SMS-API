# SMSAPI 
###### In this project we send msg with the use of three server inside one server.
  1. I created three server inside which maintain by the main Server running on Port 8000.
  2. Other three server will auto start when the main server start.
  
## Setup on your machine.
# How to setup the project on local system
  1. Clone this project
  2. Start by installing npm if you don't have it already.
  3. Navigate to Project Directory by : Using
  ```
  cd dir_name
  
  ```
  
  After reaching to the this preoject directory yo have to run this following command :
  ```
  $ npm install
  
  $ npm start
  
  ```
  
## Routes & URL

- **http://localhost:8000/?mobileNumber={value}**
  <p>To send the message you need to send mobile Number in Query params with get request</p>
- In GET request pass "mobileNumber" in Query params


## Assumption

- I take request for sending sms , I used three provider which will work to balance the laod of bulk request
- Each porvider throuput will be equal if all work fine.
- Consider we have 300 request to send sms to be sent then all provider will be sent 100 sms according to load balancing.

