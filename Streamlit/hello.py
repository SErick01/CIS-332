import streamlit as st

st.write("Hello World")

x = st.text_input("Favourite Movie?")
st.write(f"Your favourite movie is: {x}")

is_clicked = st.button("Click Me")
