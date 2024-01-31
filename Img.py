import face_recognition
import pandas as pd

# Load the CSV file into a DataFrame
df = pd.read_excel("E:\\images_info.xlsx")
# Load known face encodings and names
known_face_encodings = []
known_face_names = []

# Iterate through the CSV file to load known face encodings and names
for index, row in df.iterrows():
    image_path = row['image']
    person_name = row['caption']

    # Load and encode the known face
    image = face_recognition.load_image_file(image_path)
    face_encoding = face_recognition.face_encodings(image)[0]  # Assuming there is one face per image

    known_face_encodings.append(face_encoding)
    known_face_names.append(person_name)

# Load the image you want to recognize
unknown_image_path = 'E:\\images\\images\\image_6.jpg'
unknown_image = face_recognition.load_image_file(unknown_image_path)

# Find all face locations and face encodings in the unknown image
face_locations = face_recognition.face_locations(unknown_image)
face_encodings = face_recognition.face_encodings(unknown_image, face_locations)

for face_encoding in face_encodings:
    # Compare the unknown face with known faces
    matches = face_recognition.compare_faces(known_face_encodings, face_encoding)

    name = "Unknown"

    # If a match is found, use the name from the CSV file
    if True in matches:
        first_match_index = matches.index(True)
        name = known_face_names[first_match_index]

    print(f"Person recognized as: {name}")
