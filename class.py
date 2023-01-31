class car:
    def carname(self,mycar):
        print(mycar)
        print(self.mycar)

obj=car()
obj1=car()
obj1.carname("Hyundai")
obj.carname("mahindra")