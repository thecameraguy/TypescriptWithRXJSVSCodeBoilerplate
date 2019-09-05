class Main {
    private static message: string = 'Hello world from TS';
    public static main(argv: string[]): void {
        console.log(Main.message);
    }
}

Main.main(process.argv);