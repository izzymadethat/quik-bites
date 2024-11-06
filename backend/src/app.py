from config import Config
from flask import Flask

app = Flask(__name__)
app.config.from_object(Config)


@app.route("/api", methods=["GET"])
def hello_world():
    return {"message": "If you see this, it works!"}


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=8000)
