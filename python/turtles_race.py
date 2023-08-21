from turtle import Turtle, Screen
import random

screen = Screen()
screen.setup(width=500, height=400)
user_choice = screen.textinput(title="Make your bet", prompt="Which turtle will win the race? Enter a color: ")
print(user_choice)

speeds = [10, 20, 30, 40, 50]
colors = ["red", "green", "pink", "yellow", "blue"]
all_turtles = []

y = [-70, -40, -10, 20, 50]

for index in range(5):
    new_turtle = Turtle(shape="turtle")
    new_turtle.color(colors[index])
    new_turtle.penup()
    new_turtle.goto(x=-200, y=y[index])
    all_turtles.append(new_turtle)

winner = ''
is_race_on = True

while is_race_on:
    for turtle in all_turtles:
        if turtle.xcor() > 210:
            is_race_on = False
            winner = turtle.pencolor()
        rand_distance = random.randint(0, 10)
        turtle.forward(rand_distance)


if user_choice == winner:
    print("You've won!")
else:
    print(f"Computer has won! {winner}")

screen.exitonclick()