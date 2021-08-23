declare const _exports: {
    new (doc?: mongoose.AnyKeys<any> & mongoose.AnyObject): any;
    aggregate<R = any>(pipeline?: any[]): mongoose.Aggregate<R[]>;
    aggregate<R_1 = any>(pipeline: any[], cb: Function): Promise<R_1[]>;
    base: typeof mongoose;
    baseModelName: string;
    bulkWrite(writes: any[], options?: import("mongodb").CollectionBulkWriteOptions): Promise<import("mongodb").BulkWriteOpResultObject>;
    bulkWrite(writes: any[], options?: import("mongodb").CollectionBulkWriteOptions, cb?: (err: mongoose.NativeError, res: import("mongodb").BulkWriteOpResultObject) => void): void;
    collection: mongoose.Collection;
    count(callback?: (err: mongoose.NativeError, count: number) => void): any;
    count(filter: mongoose.FilterQuery<any>, callback?: (err: mongoose.NativeError, count: number) => void): any;
    countDocuments(callback?: (err: mongoose.NativeError, count: number) => void): any;
    countDocuments(filter: mongoose.FilterQuery<any>, callback?: (err: mongoose.NativeError, count: number) => void): any;
    create(docs: any[], options?: mongoose.SaveOptions): Promise<any[]>;
    create(docs: any[], callback: (err: mongoose.NativeError, docs: any[]) => void): void;
    create(doc: any): Promise<any>;
    create(doc: any, callback: (err: mongoose.NativeError, doc: any) => void): void;
    create<DocContents = any>(docs: DocContents[], options?: mongoose.SaveOptions): Promise<any[]>;
    create<DocContents_1 = any>(docs: DocContents_1[], callback: (err: mongoose.NativeError, docs: any[]) => void): void;
    create<DocContents_2 = any>(doc: DocContents_2): Promise<any>;
    create<DocContents_3 = any>(...docs: DocContents_3[]): Promise<any[]>;
    create<DocContents_4 = any>(doc: DocContents_4, callback: (err: mongoose.NativeError, doc: any) => void): void;
    createCollection(options?: import("mongodb").CollectionCreateOptions): Promise<import("mongodb").Collection<any>>;
    createCollection(options: import("mongodb").CollectionCreateOptions, callback: (err: mongoose.NativeError, collection: import("mongodb").Collection<any>) => void): void;
    createIndexes(callback?: (err: mongoose.NativeError) => void): Promise<void>;
    createIndexes(options?: any, callback?: (err: mongoose.NativeError) => void): Promise<void>;
    db: mongoose.Connection;
    deleteMany(filter?: mongoose.FilterQuery<any>, options?: mongoose.QueryOptions, callback?: (err: mongoose.NativeError) => void): any;
    deleteMany(filter: mongoose.FilterQuery<any>, callback: (err: mongoose.NativeError) => void): any;
    deleteMany(callback: (err: mongoose.NativeError) => void): any;
    deleteOne(filter?: mongoose.FilterQuery<any>, options?: mongoose.QueryOptions, callback?: (err: mongoose.NativeError) => void): any;
    deleteOne(filter: mongoose.FilterQuery<any>, callback: (err: mongoose.NativeError) => void): any;
    deleteOne(callback: (err: mongoose.NativeError) => void): any;
    ensureIndexes(callback?: (err: mongoose.NativeError) => void): Promise<void>;
    ensureIndexes(options?: any, callback?: (err: mongoose.NativeError) => void): Promise<void>;
    events: NodeJS.EventEmitter;
    findById(id: any, projection?: any, options?: mongoose.QueryOptions, callback?: (err: mongoose.NativeError, doc: any) => void): any;
    findOne(filter?: mongoose.FilterQuery<any>, projection?: any, options?: mongoose.QueryOptions, callback?: (err: mongoose.NativeError, doc: any) => void): any;
    hydrate(obj: any): any;
    init(callback?: (err: mongoose.NativeError) => void): Promise<any>;
    insertMany(docs: any[], options: mongoose.InsertManyOptions & {
        rawResult: true;
    }): Promise<mongoose.InsertManyResult>;
    insertMany(docs: any[], options?: mongoose.InsertManyOptions): Promise<any[]>;
    insertMany(doc: any, options: mongoose.InsertManyOptions & {
        rawResult: true;
    }): Promise<mongoose.InsertManyResult>;
    insertMany(doc: any, options?: mongoose.InsertManyOptions): Promise<any>;
    insertMany(doc: any, options?: mongoose.InsertManyOptions, callback?: (err: mongoose.NativeError, res: any) => void): void;
    insertMany(docs: any[], options?: mongoose.InsertManyOptions, callback?: (err: mongoose.NativeError, res: any[] | mongoose.InsertManyResult) => void): void;
    listIndexes(callback: (err: mongoose.NativeError, res: any[]) => void): void;
    listIndexes(): Promise<any[]>;
    modelName: string;
    populate(docs: any[], options: string | mongoose.PopulateOptions | mongoose.PopulateOptions[], callback?: (err: mongoose.NativeError, res: any[]) => void): Promise<any[]>;
    populate(doc: any, options: string | mongoose.PopulateOptions | mongoose.PopulateOptions[], callback?: (err: mongoose.NativeError, res: any) => void): Promise<any>;
    syncIndexes(options?: Record<string, unknown>): Promise<string[]>;
    syncIndexes(options: Record<string, unknown>, callback: (err: mongoose.NativeError, dropped: string[]) => void): void;
    diffIndexes(options?: Record<string, unknown>): Promise<mongoose.IndexesDiff>;
    diffIndexes(options: Record<string, unknown>, callback: (err: mongoose.NativeError, diff: mongoose.IndexesDiff) => void): void;
    startSession(options?: import("mongodb").SessionOptions, cb?: (err: mongoose.NativeError, session: import("mongodb").ClientSession) => void): Promise<import("mongodb").ClientSession>;
    validate(callback?: (err: mongoose.NativeError) => void): Promise<void>;
    validate(optional: any, callback?: (err: mongoose.NativeError) => void): Promise<void>;
    validate(optional: any, pathsToValidate: string[], callback?: (err: mongoose.NativeError) => void): Promise<void>;
    watch(pipeline?: Record<string, unknown>[], options?: import("mongodb").ChangeStreamOptions): import("mongodb").ChangeStream<any>;
    $where(argument: string | Function): any;
    discriminators: {
        [name: string]: mongoose.Model<any, {}, {}>;
    };
    translateAliases(raw: any): any;
    distinct(field: string, filter?: mongoose.FilterQuery<any>, callback?: (err: mongoose.NativeError, count: number) => void): any;
    estimatedDocumentCount(options?: mongoose.QueryOptions, callback?: (err: mongoose.NativeError, count: number) => void): any;
    exists(filter: mongoose.FilterQuery<any>): Promise<boolean>;
    exists(filter: mongoose.FilterQuery<any>, callback: (err: mongoose.NativeError, res: boolean) => void): void;
    find(callback?: (err: mongoose.NativeError, docs: any[]) => void): any;
    find(filter: mongoose.FilterQuery<any>, callback?: (err: mongoose.NativeError, docs: any[]) => void): any;
    find(filter: mongoose.FilterQuery<any>, projection?: any, options?: mongoose.QueryOptions, callback?: (err: mongoose.NativeError, docs: any[]) => void): any;
    findByIdAndDelete(id?: any, options?: mongoose.QueryOptions, callback?: (err: mongoose.NativeError, doc: any, res: any) => void): any;
    findByIdAndRemove(id?: any, options?: mongoose.QueryOptions, callback?: (err: mongoose.NativeError, doc: any, res: any) => void): any;
    findByIdAndUpdate(id: any, update: mongoose.UpdateWithAggregationPipeline | mongoose.UpdateQuery<any>, options: mongoose.QueryOptions & {
        rawResult: true;
    }, callback?: (err: mongoose.NativeError, doc: import("mongodb").FindAndModifyWriteOpResultObject<any>, res: any) => void): any;
    findByIdAndUpdate(id: any, update: mongoose.UpdateWithAggregationPipeline | mongoose.UpdateQuery<any>, options: mongoose.QueryOptions & {
        upsert: true;
    } & mongoose.ReturnsNewDoc, callback?: (err: mongoose.NativeError, doc: any, res: any) => void): any;
    findByIdAndUpdate(id: any, update: mongoose.UpdateWithAggregationPipeline | mongoose.UpdateQuery<any>, callback?: (err: mongoose.NativeError, doc: any, res: any) => void): any;
    findByIdAndUpdate(id?: any, update?: mongoose.UpdateWithAggregationPipeline | mongoose.UpdateQuery<any>, options?: mongoose.QueryOptions, callback?: (err: mongoose.NativeError, doc: any, res: any) => void): any;
    findOneAndDelete(filter?: mongoose.FilterQuery<any>, options?: mongoose.QueryOptions, callback?: (err: mongoose.NativeError, doc: any, res: any) => void): any;
    findOneAndRemove(filter?: mongoose.FilterQuery<any>, options?: mongoose.QueryOptions, callback?: (err: mongoose.NativeError, doc: any, res: any) => void): any;
    findOneAndReplace(filter: mongoose.FilterQuery<any>, replacement: mongoose._AllowStringsForIds<mongoose.LeanDocument<any>>, options: mongoose.QueryOptions & {
        upsert: true;
    } & mongoose.ReturnsNewDoc, callback?: (err: mongoose.NativeError, doc: any, res: any) => void): any;
    findOneAndReplace(filter?: mongoose.FilterQuery<any>, replacement?: mongoose._AllowStringsForIds<mongoose.LeanDocument<any>>, options?: mongoose.QueryOptions, callback?: (err: mongoose.NativeError, doc: any, res: any) => void): any;
    findOneAndUpdate(filter: mongoose.FilterQuery<any>, update: mongoose.UpdateWithAggregationPipeline | mongoose.UpdateQuery<any>, options: mongoose.QueryOptions & {
        rawResult: true;
    }, callback?: (err: mongoose.NativeError, doc: import("mongodb").FindAndModifyWriteOpResultObject<any>, res: any) => void): any;
    findOneAndUpdate(filter: mongoose.FilterQuery<any>, update: mongoose.UpdateWithAggregationPipeline | mongoose.UpdateQuery<any>, options: mongoose.QueryOptions & {
        upsert: true;
    } & mongoose.ReturnsNewDoc, callback?: (err: mongoose.NativeError, doc: any, res: any) => void): any;
    findOneAndUpdate(filter?: mongoose.FilterQuery<any>, update?: mongoose.UpdateWithAggregationPipeline | mongoose.UpdateQuery<any>, options?: mongoose.QueryOptions, callback?: (err: mongoose.NativeError, doc: any, res: any) => void): any;
    geoSearch(filter?: mongoose.FilterQuery<any>, options?: mongoose.GeoSearchOptions, callback?: (err: mongoose.NativeError, res: any[]) => void): any;
    mapReduce<Key, Value>(o: mongoose.MapReduceOptions<any, Key, Value>, callback?: (err: mongoose.NativeError, res: any) => void): Promise<any>;
    remove(filter?: any, callback?: (err: mongoose.NativeError) => void): any;
    replaceOne(filter?: mongoose.FilterQuery<any>, replacement?: mongoose._AllowStringsForIds<mongoose.LeanDocument<any>>, options?: mongoose.QueryOptions, callback?: (err: mongoose.NativeError, res: any) => void): any;
    replaceOne(filter?: mongoose.FilterQuery<any>, replacement?: Object, options?: mongoose.QueryOptions, callback?: (err: mongoose.NativeError, res: any) => void): any;
    schema: mongoose.Schema<mongoose.Document<any, any, any>, mongoose.Model<any, any, any>, undefined, any>;
    update(filter?: mongoose.FilterQuery<any>, update?: mongoose.UpdateWithAggregationPipeline | mongoose.UpdateQuery<any>, options?: mongoose.QueryOptions, callback?: (err: mongoose.NativeError, res: any) => void): any;
    updateMany(filter?: mongoose.FilterQuery<any>, update?: mongoose.UpdateWithAggregationPipeline | mongoose.UpdateQuery<any>, options?: mongoose.QueryOptions, callback?: (err: mongoose.NativeError, res: any) => void): any;
    updateOne(filter?: mongoose.FilterQuery<any>, update?: mongoose.UpdateWithAggregationPipeline | mongoose.UpdateQuery<any>, options?: mongoose.QueryOptions, callback?: (err: mongoose.NativeError, res: any) => void): any;
    where(path: string, val?: any): any;
    where(obj: object): any;
    where(): any;
    addListener(event: string | symbol, listener: (...args: any[]) => void): mongoose.Model<any, any, any>;
    on(event: string | symbol, listener: (...args: any[]) => void): mongoose.Model<any, any, any>;
    once(event: string | symbol, listener: (...args: any[]) => void): mongoose.Model<any, any, any>;
    removeListener(event: string | symbol, listener: (...args: any[]) => void): mongoose.Model<any, any, any>;
    off(event: string | symbol, listener: (...args: any[]) => void): mongoose.Model<any, any, any>;
    removeAllListeners(event?: string | symbol): mongoose.Model<any, any, any>;
    setMaxListeners(n: number): mongoose.Model<any, any, any>;
    getMaxListeners(): number;
    listeners(event: string | symbol): Function[];
    rawListeners(event: string | symbol): Function[];
    emit(event: string | symbol, ...args: any[]): boolean;
    listenerCount(event: string | symbol): number;
    prependListener(event: string | symbol, listener: (...args: any[]) => void): mongoose.Model<any, any, any>;
    prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): mongoose.Model<any, any, any>;
    eventNames(): (string | symbol)[];
    discriminator<D>(name: string | number, schema: mongoose.Schema<D, mongoose.Model<any, any, any>, undefined, any>, value?: string | number | mongoose.Schema.Types.ObjectId): mongoose.Model<D, {}, {}>;
    discriminator<T, U extends mongoose.Model<T, {}, {}>>(name: string | number, schema: mongoose.Schema<T, U, undefined, mongoose.ExtractMethods<U>>, value?: string | number | mongoose.Schema.Types.ObjectId): U;
};
export = _exports;
import mongoose = require("mongoose");
