declare module egret {
    
    /**
     * @language zh_CN
     * @private
     * @version Egret 2.4
     * @platform Web,Native
     */
    interface ISocket {
        
        /**
         * @language zh_CN
         * 连接
         * @method egret.ISocket#connect
         * @version Egret 2.4
         * @platform Web,Native
         */
        connect(host: string, port: number): void;
        /**
         * 连接
         * @method egret.ISocket#connect
         */
        connectByUrl(url: string): void;
        
        /**
         * @language zh_CN
         *
         * @param onConnect
         * @param onClose
         * @param onSocketData
         * @param onError
         * @param thisObject
         * @version Egret 2.4
         * @platform Web,Native
         */
        addCallBacks(onConnect: Function, onClose: Function, onSocketData: Function, onError: Function, thisObject: any): void;
        
        /**
         * @language zh_CN
         *
         * @param message
         * @version Egret 2.4
         * @platform Web,Native
         */
        send(message: any): void;
        
        /**
         * @language zh_CN
         *
         * @version Egret 2.4
         * @platform Web,Native
         */
        close(): void;
    }
    
    /**
     * @language zh_CN
     * @version Egret 2.4
     * @platform Web,Native
     */
    var ISocket: {
        new (): ISocket;
    };
}
declare module egret {
    
    /**
     * @language zh_CN
     * egret.WebSocket 类启用代码以建立传输控制协议 (TCP) 套接字连接，用于发送和接收字符串或二进制数据。
     * 要使用 egret.WebSocket 类的方法，请先使用构造函数 new egret.WebSocket 创建一个 egret.WebSocket 对象。
     * 套接字以异步方式传输和接收数据。
     * @event egret.Event.CONNECT 连接服务器成功。
     * @event egret.ProgressEvent.SOCKET_DATA 接收服务器数据。
     * @event egret.Event.CLOSE 在服务器关闭连接时调度。
     * @event egret.IOErrorEvent.IO_ERROR 在出现输入/输出错误并导致发送或加载操作失败时调度。。
     * @see http://edn.egret.com/cn/docs/page/602 WebSocket
     * @version Egret 2.4
     * @platform Web,Native
     * @includeExample extension/socket/WebSocket.ts
     */
    class WebSocket extends egret.EventDispatcher {
        
        /**
         * @language zh_CN
         * 以字符串格式发送和接收数据
         * @version Egret 2.4
         * @platform Web,Native
         */
        static TYPE_STRING: string;
        
        /**
         * @language zh_CN
         * 以二进制格式发送和接收数据
         * @version Egret 2.4
         * @platform Web,Native
         */
        static TYPE_BINARY: string;
        /**
         * @private
         */
        private socket;
        /**
         * @private
         */
        private _writeMessage;
        /**
         * @private
         */
        private _readMessage;
        /**
         * @private
         */
        private _connected;
        
        /**
         * @language zh_CN
         * 创建一个 egret.WebSocket 对象
         * 参数为预留参数，现版本暂不处理，连接地址和端口号在 connect 函数中传入
         * @version Egret 2.4
         * @platform Web,Native
         */
        constructor(host?: string, port?: number);
        private connectCount;
        
        /**
         * @language zh_CN
         * 将套接字连接到指定的主机和端口
         * @param host 要连接到的主机的名称或 IP 地址
         * @param port 要连接到的端口号
         * @version Egret 2.4
         * @platform Web,Native
         */
        connect(host: string, port: number): void;
        /**
         * 根据提供的url连接
         * @param url 全地址。如ws://echo.websocket.org:80
         */
        connectByUrl(url: string): void;
        
        /**
         * @language zh_CN
         * 关闭套接字
         * @version Egret 2.4
         * @platform Web,Native
         */
        close(): void;
        /**
         * @private
         *
         */
        private onConnect();
        /**
         * @private
         *
         */
        private onClose();
        /**
         * @private
         *
         */
        private onError();
        /**
         * @private
         *
         * @param message
         */
        private onSocketData(message);
        
        /**
         * @language zh_CN
         * 对套接字输出缓冲区中积累的所有数据进行刷新
         * @version Egret 2.4
         * @platform Web,Native
         */
        flush(): void;
        /**
         * @private
         */
        private _isReadySend;
        
        /**
         * @language zh_CN
         * 将字符串数据写入套接字
         * @param message 要写入套接字的字符串
         * @version Egret 2.4
         * @platform Web,Native
         */
        writeUTF(message: string): void;
        
        /**
         * @language zh_CN
         * 从套接字读取一个 UTF-8 字符串
         * @returns {string}
         * @version Egret 2.4
         * @platform Web,Native
         */
        readUTF(): string;
        /**
         * @private
         */
        private _readByte;
        /**
         * @private
         */
        private _writeByte;
        /**
         * @private
         */
        private _bytesWrite;
        
        /**
         * @language zh_CN
         * 从指定的字节数组写入一系列字节。写入操作从 offset 指定的位置开始。
         * 如果省略了 length 参数，则默认长度 0 将导致该方法从 offset 开始写入整个缓冲区。
         * 如果还省略了 offset 参数，则写入整个缓冲区。
         * @param bytes 要从中读取数据的 ByteArray 对象
         * @param offset ByteArray 对象中从零开始的偏移量，应由此开始执行数据写入
         * @param length 要写入的字节数。默认值 0 导致从 offset 参数指定的值开始写入整个缓冲区
         * @version Egret 2.4
         * @platform Web,Native
         */
        writeBytes(bytes: ByteArray, offset?: number, length?: number): void;
        
        /**
         * @language zh_CN
         * 从套接字读取 length 参数指定的数据字节数。从 offset 所表示的位置开始，将这些字节读入指定的字节数组
         * @param bytes 要将数据读入的 ByteArray 对象
         * @param offset 数据读取的偏移量应从该字节数组中开始
         * @param length 要读取的字节数。默认值 0 导致读取所有可用的数据
         * @version Egret 2.4
         * @platform Web,Native
         */
        readBytes(bytes: ByteArray, offset?: number, length?: number): void;
        
        /**
         * @language zh_CN
         * 表示此 Socket 对象目前是否已连接
         * @version Egret 2.4
         * @platform Web,Native
         */
        connected: boolean;
        /**
         * @private
         */
        private _type;
        
        /**
         * @language zh_CN
         * 发送和接收数据的格式，默认是字符串格式
         * @version Egret 2.4
         * @platform Web,Native
         */
        type: string;
    }
}
declare module egret.native {
    /**
     * @private
     */
    class NativeSocket implements ISocket {
        private socket;
        constructor();
        private onConnect;
        private onClose;
        private onSocketData;
        private onError;
        private thisObject;
        addCallBacks(onConnect: Function, onClose: Function, onSocketData: Function, onError: Function, thisObject: any): void;
        private host;
        private port;
        connect(host: string, port: number): void;
        connectByUrl(url: string): void;
        private _bindEvent();
        send(message: any): void;
        close(): void;
    }
}
declare module egret.web {
    /**
     * @private
     */
    class HTML5WebSocket implements ISocket {
        private socket;
        constructor();
        private onConnect;
        private onClose;
        private onSocketData;
        private onError;
        private thisObject;
        addCallBacks(onConnect: Function, onClose: Function, onSocketData: Function, onError: Function, thisObject: any): void;
        private host;
        private port;
        connect(host: string, port: number): void;
        connectByUrl(url: string): void;
        private _bindEvent();
        send(message: any): void;
        close(): void;
    }
}
