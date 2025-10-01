<h1>Something about the project</h1>

<p>The project is a pet project, this is the backend of the project</p>

<h3>In the project i chose exactly this structure:</h3>

<h3>📂 Structure of the project</h3>

The project is built on the principle of separation of responsibilities:

<div>
  routes/ – only routes (API).
</div>
<div>
  controllers/ – accept a request, return an answer.
</div>

<div>
  services/ – business-logic (checks, rules).
</div>

<div>
  models/ – work with database (requests).
</div>

<div>
  middlewares/ – common logic (authorization, errors).
</div>

<div>
  utils/ – auxiliary functions
</div>

<div>
  config/ – setting (env, clients).
</div>

<br>
✅ advantage of the structure
<br>
<br>
Distinct layers — easy to read and support code
Scalability — just add new features
Reuse — services and models can be used in different places

