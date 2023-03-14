class country:
    def movievar(self):
        print("India")
class city(country):
    def movievar(self):
        print("Bhadrak")
class games(country):
    def movievar(self):
        print("cricket")
class bike(games,city):
    def movievar(self):
        print("unicorn")
 # class car(games, city):
 #            def movievar(self):
 #                print("Hyundai")
obj=country()
obj.movievar()
city.movievar(obj)
games.movievar(obj)
country.movievar(obj)
bike.movievar(obj)
# car.movievar(obj)