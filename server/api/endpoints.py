from flask_oidc import OpenIDConnect
from flask import Flask, json, g, request
from ..service import Service as Kudo
from ...db.schema import GithubRepoSchema
from flask_cors import flask_cors

app = Flask(__name__)
app.config.update({
  'OIDC_CLIENT_SECRETS': './../../../../../client_secrets.json',
  'OIDC_RESOURCE_SERVER_ONLY': True
})

oidc = OpenIDConnect(app)
CORS(app)

#GET to /kudos (gets all)
@app.route("/kudos", methods=["GET"])
@oidc.accept_token(True)
def index():
  return json_response(Kudo(g.oidc_token_info['sub']).find_all_kudos()

#POST to /kudos
@app.route("/kudos", methods=["POST"])
@oidc.accept_token(True)
def create():
  github_repo = GithubRepoSchema().load(json.loads(request.data))

  if github_repo.errors:
    return json_response({error: github_repo.errors}, 422)

  kudo = Kudo(g.oidc_token_info['sub']).find_kudo(repo_id)
  return json_response(kudo)




