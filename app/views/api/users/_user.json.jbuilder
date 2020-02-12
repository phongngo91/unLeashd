# json.extract! user, :id, :username

json.id user.id
json.username user.username
# if the user has a photo attached, return the image url for the photo
json.image_url  url_for(user.photo) if user.photo.attached?

