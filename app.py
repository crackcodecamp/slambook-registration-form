from flask import Flask, request
import csv

app = Flask(__name__)

@app.route('/', methods=['POST'])
def save_data():
    # Get data from POST request
    data = request.form.to_dict()

    # Open CSV file in append mode
    with open('slambook.csv', mode='a', newline='') as file:
        writer = csv.writer(file)
        writer.writerow(data.values())

    # Return success response
    return 'Data saved successfully.'

if __name__ == '__main__':
    app.run()
