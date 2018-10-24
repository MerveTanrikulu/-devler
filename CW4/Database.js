// JavaScript source code
class Course extends Menu {
    constructor(na, ti, da, ro) {
        this.name = na;
        this.time = ti;
        this.date = da;
        this.room = ro;
    }
    toString() {
        return "Name : " + this.name + "Time : " + this.time + "Date : " + this.date + "Room : " + this.date
    }
}
class Student {
    constructor(i, n, g, c) {
        this.id = i;
        this.name = n;
        this.gpa = g;
        this.course = c;
    }
    toString() {
        return "Id : " + this.id + "Name : " + this.name + "Gpa : " + this.gpa + "Course : " + this.course
    }
}
class Point {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return "Point X : " + this.x + "Point Y : " + this.y
    }
}

class Point3D extends Point(x, y, z) {
    super(x,y);
    constructor(z) {       
        this.z = z;
    }
    toString() {
        return "Point X : " + this.x + "Point Y : " + this.y + "Point Z : " + this.z
    }
}
