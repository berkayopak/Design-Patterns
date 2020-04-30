import Human from "../Models/Human";

let HumanBuilder = function () {
    return {
        setArm1: function (Arm1) {
            this.Arm1 = Arm1;
            return this;
        },
        setArm2: function (Arm2) {
            this.Arm2 = Arm2;
            return this;
        },
        setBody: function (Body) {
            this.Body = Body;
            return this;
        },
        setHead: function (Head) {
            this.Head = Head;
            return this;
        },
        setLeg1: function (Leg1) {
            this.Leg1 = Leg1;
            return this;
        },
        setLeg2: function (Leg2) {
            this.Leg2 = Leg2;
            return this;
        },
        setNeck: function (Neck) {
            this.Neck = Neck;
            return this;
        },
        build: function () {
            return new Human(this.Arm1, this.Arm2, this.Body, this.Head, this.Leg1, this.Leg2, this.Neck);
        }
    };
};

export default HumanBuilder;