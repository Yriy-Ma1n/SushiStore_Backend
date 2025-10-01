<h1>Something about the project</h1>

<p>The project is a pet project, this is the backend of the project</p>

<h3>In the project i chose exactly this structure:</h3>

<h3>📂 Structure of the project</h3>

The project is built on the principle of separation of responsibilities:

routes/ – only routes (API).
controllers/ – accept a request, return an answer.
services/ – business-logic (checks, rules).
models/ – work with database (requests).
middlewares/ – common logic (authorization, errors).
utils/ – auxiliary functions
config/ – setting (env, clients).

✅ advantage of the structure

Distinct layers — easy to read and support code
Scalability — just add new features
Reuse — services and models can be used in different places

