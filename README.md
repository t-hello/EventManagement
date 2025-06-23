# EventManagement

An event management system where Admins can create, update, delete events and track RSVP statuses, while Users can view events and submit their RSVP responses (Going, Maybe, Decline).
Technologies Used
React + Vite	Fast, modern frontend development with optimal build speed.
Tailwind CSS (optional)	Rapid styling with utility-first classes (minimal boilerplate).
Node.js + Express	Lightweight, scalable backend API server.
MongoDB + Mongoose	Flexible NoSQL database for rapid data modeling.
Axios	Simplified HTTP client for API communication.

ER Diagram (Text Representation)
[User]
- _id (PK)
- name
- email

[Event]
- _id (PK)
- title
- description
- location
- eventDate
- createdBy (FK → User._id)

[RSVP]
- _id (PK)
- userId (FK → User._id)
- eventId (FK → Event._id)
- status ("Going", "Maybe", "Decline")

- Notes
Prevents duplicate RSVPs per user/event.
RSVP can only be updated before the event date.
Separate sections for Admin and User functionality.
Future improvements: Authentication, Role-based access, Email notifications.


