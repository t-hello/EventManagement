![1000069272](https://github.com/user-attachments/assets/585de20a-600a-46be-b45f-de659f043354)
![1000069271](https://github.com/user-attachments/assets/411e4b5f-d070-433a-8541-c57250020f62)
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

![WhatsApp Image 2025-06-23 at 7 36 57 PM](https://github.com/user-attachments/assets/539cd219-e0ee-4e61-af76-a32cfa902d6c)



