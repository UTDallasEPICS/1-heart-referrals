# 1-heart-referrals

# How to Run Backend and Frontend:

- Clone the repository
- Open terminal and run `npm install`
- Run `npm run dev`

# Setting Up Database

- Make sure you have Postgres installed and open pgAdmin
- Open the `.env` in the server folder
- Change the `DATABASE_URL` to `"postgresql://DBUSER:DBPASSWORD@localhost:5432/DBNAME?schema=public"`
- Run `prisma migrate dev` (If that doesn't work, run `npx prisma migrate dev`)

# Referral System:

This project will enable One Heart McKinney Navigators to make effective and efficient referrals to social service providers for families in need. System needs include storing information about network partners, allow for ‘intake’ (capturing family information and needs), creation and tracking of referrals from One Heart McKinney to network partners, and provide for referral follow-up, tracking and reporting.

# Goal:

Provide database design and the ability to capture partner and client data. This will lay the foundation for the ability to create the referral entry, tracking, follow-and reporting capabilities.

# Summary

### Database Concepts

### Web Development

### User interface Design

### Search and report building

---

# Conceptual Overview

The One Heart McKinney(OHM) referral system project serves as a link between individuals in need and social service providers. It encompasses partner,client and adminstrator information storage, an intake process for families to outline their needs, and a structured system for assigning suitable partners.
This project gives One Heart McKinney a way to store client referrals and direct them to different partners.

# Functional requirements

##### Sign Up Page - Adminstrators from One Heart McKinney can make accounts on this page.

##### Login Page - Adminstrators can login to their account on this pgae.

##### Dashboard - You can see a side bar with internal cases and assitance requests.

##### Displaying Cases Page - Displays client name, service type requested

##### Landing Page - Users can

# Third party integrations

NA

# Tech Stack

##### Front end - React, Axios

##### Backend - Node.js, Express, Bcrypt, Axios

##### Database - PostgreSQL

###### Important packages - Prisma

##### Other tools - Postman

# Instructions to set up development envrionment

#### How to start project

##### Download pg admin

##### Download PostgreSQL

##### Download Node.js

##### npm install express

##### npm install bcryptjs

##### npm install axios

##### npm install prisma
