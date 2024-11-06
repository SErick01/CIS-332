import streamlit as st

st.title("Welcome to my BMI Calculator")

weight = st.number_input("Enter your weight (in kgs)")
status = st.radio('Select weight format', ('cms', 'meters', 'feet'))

if(status == 'cms'):
    height = st.number_input('Centimeters')
    bmi = weight / ((height / 100) ** 2)

elif(status == 'meters'):
    height = st.number_input('Meters')
    bmi = weight / (height ** 2)

elif(status == 'feet'):
    height = st.number_input('Feets')
    bmi = weight / ((height / 3.28) ** 2)

if(st.button('Calculate BMI')):
    st.text('Your BMI index is {}.' .format(bmi))

    if(bmi < 16):
        st.error("You are extremly underweight")
    
    elif(bmi <= 16 and bmi < 18.5):
        st.warning("You are underweight")
    
    elif(bmi > 18.5 and bmi < 25):
        st.success("You are healthy")
    
    elif(bmi >= 25 and bmi < 30):
        st.warning("You are overweight")
    
    elif(bmi >= 30):
        st.error("You are extremely overweight")
