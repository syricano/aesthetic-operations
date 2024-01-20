from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/submit_form', methods=['POST'])
def submit_form():
    name = request.form.get('name')
    email = request.form.get('email')
    message = request.form.get('message')
    # Add logic to handle the form data (e.g., store in a database)
    return 'Form submitted successfully!'


if __name__ == '__main__':
    app.run(debug=True)


    