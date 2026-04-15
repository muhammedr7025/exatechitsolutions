from PIL import Image
def process_image():
    try:
        img = Image.open('public/logo.jpg').convert("RGBA")
        datas = img.getdata()
        new_data = []
        for item in datas:
            # Check if white background
            if item[0] > 200 and item[1] > 200 and item[2] > 200:
                new_data.append((255, 255, 255, 0))
            # Check if black text/shapes
            elif item[0] < 80 and item[1] < 80 and item[2] < 80:
                new_data.append((255, 255, 255, 255)) # Convert to white
            else:
                new_data.append(item) # keep green
        img.putdata(new_data)
        img.save('public/logo.png', "PNG")
        print("Success")
    except Exception as e:
        print(f"Error: {e}")
process_image()
