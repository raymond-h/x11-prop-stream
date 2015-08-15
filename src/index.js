import stream from 'stream';

export default class XPropertyReadStream extends stream.Readable {
    constructor(X, wid, name, type, opts) {
        super(opts);
        this.X = X;
        this.wid = wid;
        this.name = name;
        this.type = type;

        this.offset = 0;
    }

    _read(size) {
        this.X.GetProperty(0, this.wid, this.name, this.type, this.offset/4, size/4, (err, value) => {
            if(err) throw err;

            if(value.data.length === 0) return this.push(null);

            this.offset += value.data.length;
            this.push(value.data);
        });
    }
};

// future-proofing
export const Readable = XPropertyReadStream;
