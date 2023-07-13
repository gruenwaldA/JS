function proceaaingData<T, S>(data: T , options: S): T {
    return data;
}
let res11 = proceaaingData(1, "fast");
let res12 = proceaaingData("1", "fast");
const res13 = proceaaingData <number, string>(10, "ss")