cls <test>;
    init <>;
    end();
    fun <read:class:name>;
        print(name);
    end();
end();
const aa?any = new test();
aa.read('test');