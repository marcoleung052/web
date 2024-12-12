from flask import Flask, render_template, request, jsonify
import requests

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("首頁.html")

@app.route("/tw")
def tw():
    return render_template("tw.html")

@app.route("/ct")
def ct():
    return render_template("ct.html")

@app.route("/cb")
def cb():
    return render_template("角色背景.html")

@app.route("/fam")
def fam():
    return render_template("家庭.html")

@app.route("/wb")
def wb():
    return render_template("作品背景.html")

@app.route("/7")
def s():
    return render_template("七龍珠.html")

@app.route("/z")
def z():
    return render_template("龍珠Z.html")

@app.route("/kai")
def kai():
    return render_template("龍珠改.html")

@app.route("/super")
def super():
    return render_template("龍珠超.html")

@app.route("/tran")
def tran():
    return render_template("變身.html")

@app.route("/move")
def move():
    return render_template("招式.html")

if __name__ == "__main__":
    app.run(debug=True)
