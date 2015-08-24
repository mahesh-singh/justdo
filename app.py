"""
This script runs the application using a development server.
It contains the definition of routes and views for the application.
"""

from flask import Flask, render_template
from flask_restful import reqparse, abort, Api, Resource

app = Flask(__name__)
api = Api(app)

# Make the WSGI interface available at the top level so wfastcgi can get it.
wsgi_app = app.wsgi_app


PROJECTS = [
    {
        'id': 1,
        'title': u'Groceries',
        'tasks' : [
                {
                    'id' : 1,
                    'title' : 'Milk' 
                },
                {
                    'id' : 2,
                    'title' : 'Cheese' 
                },
                {
                    'id' : 3,
                    'title' : 'Pizza' 
                },
            ]
    },
    {
        'id': 2,
        'title': u'Learn',
        'tasks' : [
                {
                    'id' : 4,
                    'title' : 'Learn Python' 
                },
                {
                    'id' : 5,
                    'title' : 'Learn React' 
                },
                {
                    'id' : 6,
                    'title' : 'Learn machine learning' 
                },
            ]
    }
]

def abort_if_todo_doesnt_exist(project_id):
    if project_id not in PROJECTS:
        abort(404, message="Project {} doesn't exist".format(project_id))

parser = reqparse.RequestParser()
parser.add_argument('project')

class ProjectList(Resource):
    def get(self):
        return PROJECTS

@app.route('/')
def index():
    """Renders a sample page."""
    return render_template("index.html")

@app.route('/p')
def preview():
    """Renders a sample page."""
    return render_template("index-p.html")

api.add_resource(ProjectList, '/projects')


if __name__ == '__main__':
    import os
    HOST = os.environ.get('SERVER_HOST', 'localhost')
    try:
        PORT = int(os.environ.get('SERVER_PORT', '5555'))
    except ValueError:
        PORT = 5555
    app.run(HOST, PORT)
