function add(a: number, b: number) {
    return a + b
    }

    // Именованная функция
function greet(name: string) {
    return 'hello ' + name
    }
    // Функциональное выражение
    let greet2 = function(name: string) {
    return 'hello ' + name
    }
    // Выражение стрелочной функции
    let greet3 = (name: string) => {
    return 'hello ' + name
    }
    // Сокращенное выражение стрелочной функции
    let greet4 = (name: string) =>
    'hello ' + name
    // Конструктор функции
    let greet5 = new Function('name', 'return "hello " + name')

    function log(message: string, userId?: string) {
        let time = new Date().toLocaleTimeString()
        console.log(time, message, userId || 'Not signed in')
        }
        log('Page loaded') // Логирует "12:38:31 PM
        // Page loaded Not signed in"
        log('User signed in', 'da763be') // Логирует "12:38:31 PM
        // User signed in da763be"