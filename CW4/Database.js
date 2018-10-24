// JavaScript source code
class Course {
    constructor(na, ti, da, ro) {
        this.name = na;
        this.time = ti;
        this.date = da;
        this.room = ro;
    }
    toString() {
        return "Name : "+this.name+"Time : "+this.time+"Date : "+this.date+"Room : "+this.room;
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
        return "Id : "+this.id+"Name : "+this.name+"Gpa : "+this.gpa+"Course : "+this.course;
    }
}
class Point {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return "Point X : "+this.x+"Point Y : "+this.y;
    }
}
class Point3D extends Point {    
    constructor(x,y,z) {  
        super(x,y);
        this.z = z;
    }
    toString() {
        return "Point X : "+this.x+"Point Y : "+this.y+"Point Z : "+this.z;
    }
}
class Distance {
    constructor(km = 0) {
        this.km = Math.round(km);
    }
    get miles() {
        return Math.round(this.km * 1.6);
    }
    set miles(value = 0) {
        this.km = Math.round(value / 1.6);
    }
    toString() {
        return this.km + " km";
    }
    static fromMiles(value) {
        let d = new Distance();
        d.miles = value;
        return d;
    }
}

class CW4 extends Menu {
    constructor() {
        super();
        this.course = new Course("BLM305","12:00","24.10.2018","B-114");
        this.student = new Student("144838272", "Melis", "4", "BLM305");
        this.point = new Point("2","3");
        this.point3D = new Point3D("3","4","5");
        this.distance = new Distance("200", "1000");
    }
} 