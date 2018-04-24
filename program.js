
//1. enkodowanie
process.stdin.setEncoding('utf-8');
//2. nasłuchiwanie na zdarzenia odczytu
process.stdin.on('readable', function() {
	// tutaj treść tego co ma się wykonać w momencie odczytania wejścia.
    // metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
    var input = process.stdin.read();
	if(input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
        	case '/exit':
		        process.stdout.write('Quitting app!\n');
		        process.exit();
		        break;
        	case '/versionNode':
        		process.stdout.write('Node.js version is : ' + process.version.node + '\n');
        		break;
        	case '/SysLang':
        		process.stdout.write('System language is ' + process.env.lang + '\n');
        		break;
        	default :
        		process.stderr.write('Wrong instruction!\n');
        };
    }    
});

