declare module RES {
    
    /**
     * @language zh_CN
     * 资源项。对应 resource.json 中 resources 数组中的一项。
     * @version Egret 2.4
     * @platform Web,Native
     */
    class ResourceItem {
        
        /**
         * @language zh_CN
         * XML 文件。
         * @version Egret 2.4
         * @platform Web,Native
         */
        static TYPE_XML: string;
        
        /**
         * @language zh_CN
         * 图片文件。
         * @version Egret 2.4
         * @platform Web,Native
         */
        static TYPE_IMAGE: string;
        
        /**
         * @language zh_CN
         * 二进制文件。
         * @version Egret 2.4
         * @platform Web
         */
        static TYPE_BIN: string;
        
        /**
         * @language zh_CN
         * 文本文件。
         * @version Egret 2.4
         * @platform Web,Native
         */
        static TYPE_TEXT: string;
        
        /**
         * @language zh_CN
         * JSON 文件。
         * @version Egret 2.4
         * @platform Web,Native
         */
        static TYPE_JSON: string;
        
        /**
         * @language zh_CN
         * SpriteSheet 文件。
         * @version Egret 2.4
         * @platform Web,Native
         */
        static TYPE_SHEET: string;
        
        /**
         * @language zh_CN
         * BitmapTextSpriteSheet 文件。
         * @version Egret 2.4
         * @platform Web,Native
         */
        static TYPE_FONT: string;
        
        /**
         * @language zh_CN
         * 声音文件。
         * @version Egret 2.4
         * @platform Web,Native
         */
        static TYPE_SOUND: string;
        
        /**
         * @language zh_CN
         * 构造函数。
         * @param name 加载项名称。
         * @param url 要加载的文件地址。
         * @param type 加载项文件类型。
         * @version Egret 2.4
         * @platform Web,Native
         */
        constructor(name: string, url: string, type: string);
        
        /**
         * @language zh_CN
         * 加载项名称。
         * @version Egret 2.4
         * @platform Web,Native
         */
        name: string;
        
        /**
         * @language zh_CN
         * 要加载的文件地址。
         * @version Egret 2.4
         * @platform Web,Native
         */
        url: string;
        
        /**
         * @language zh_CN
         * 加载项文件类型。
         * @version Egret 2.4
         * @platform Web,Native
         */
        type: string;
        
        /**
         * @language zh_CN
         * 资源所属的组名。
         * @version Egret 2.4
         * @platform Web,Native
         */
        groupName: string;
        
        /**
         * @language zh_CN
         * 被引用的原始数据对象。
         * @version Egret 2.4
         * @platform Web,Native
         */
        data: any;
        private _loaded;
        
        /**
         * @language zh_CN
         * 加载完成的标志。
         * @version Egret 2.4
         * @platform Web,Native
         */
        loaded: boolean;
        
        /**
         * @language zh_CN
         * 转成字符串。
         * @version Egret 2.4
         * @platform Web,Native
         */
        toString(): string;
    }
}
declare module RES {
    /**
     * @class RES.ResourceConfig
     * @classdesc
     * @private
     */
    class ResourceConfig {
        constructor();
        /**
         * 根据组名获取组加载项列表
         * @method RES.ResourceConfig#getGroupByName
         * @param name {string} 组名
         * @returns {Array<egret.ResourceItem>}
         */
        getGroupByName(name: string): Array<ResourceItem>;
        /**
         * 根据组名获取原始的组加载项列表
         * @method RES.ResourceConfig#getRawGroupByName
         * @param name {string} 组名
         * @returns {Array<any>}
         */
        getRawGroupByName(name: string): Array<any>;
        /**
         * 创建自定义的加载资源组,注意：此方法仅在资源配置文件加载完成后执行才有效。
         * 可以监听ResourceEvent.CONFIG_COMPLETE事件来确认配置加载完成。
         * @method RES.ResourceConfig#createGroup
         * @param name {string} 要创建的加载资源组的组名
         * @param keys {egret.Array<string>} 要包含的键名列表，key对应配置文件里的name属性或sbuKeys属性的一项或一个资源组名。
         * @param override {boolean} 是否覆盖已经存在的同名资源组,默认false。
         * @returns {boolean}
         */
        createGroup(name: string, keys: Array<string>, override?: boolean): boolean;
        /**
         * 一级键名字典
         */
        private keyMap;
        /**
         * 加载组字典
         */
        private groupDic;
        /**
         * 解析一个配置文件
         * @method RES.ResourceConfig#parseConfig
         * @param data {any} 配置文件数据
         * @param folder {string} 加载项的路径前缀。
         */
        parseConfig(data: any, folder: string): void;
        /**
         * 添加一个二级键名到配置列表。
         * @method RES.ResourceConfig#addSubkey
         * @param subkey {string} 要添加的二级键名
         * @param name {string} 二级键名所属的资源name属性
         */
        addSubkey(subkey: string, name: string): void;
        /**
         * 添加一个加载项数据到列表
         */
        private addItemToKeyMap(item);
        /**
         * 获取加载项的name属性
         * @method RES.ResourceConfig#getType
         * @param key {string} 对应配置文件里的name属性或sbuKeys属性的一项。
         * @returns {string}
         */
        getName(key: string): string;
        /**
         * 获取加载项类型。
         * @method RES.ResourceConfig#getType
         * @param key {string} 对应配置文件里的name属性或sbuKeys属性的一项。
         * @returns {string}
         */
        getType(key: string): string;
        getRawResourceItem(key: string): any;
        /**
         * 获取加载项信息对象
         * @method RES.ResourceConfig#getResourceItem
         * @param key {string} 对应配置文件里的key属性或sbuKeys属性的一项。
         * @returns {egret.ResourceItem}
         */
        getResourceItem(key: string): ResourceItem;
        /**
         * 转换Object数据为ResourceItem对象
         */
        private parseResourceItem(data);
    }
}
declare module RES {
    /**
     * @class RES.ResourceLoader
     * @classdesc
     * @extends egret.EventDispatcher
     * @private
     */
    class ResourceLoader extends egret.EventDispatcher {
        /**
         * 构造函数
         * @method RES.ResourceLoader#constructor
         */
        constructor();
        /**
         * 最大并发加载数
         */
        thread: number;
        /**
         * 正在加载的线程计数
         */
        private loadingCount;
        /**
         * 一项加载结束回调函数。无论加载成功或者出错都将执行回调函数。示例：callBack(resItem:ResourceItem):void;
         * @member {Function} RES.ResourceLoader#callBack
         */
        callBack: Function;
        /**
         * RES单例的引用
         * @member {any} RES.ResourceLoader#resInstance
         */
        resInstance: any;
        /**
         * 当前组加载的项总个数,key为groupName
         */
        private groupTotalDic;
        /**
         * 已经加载的项个数,key为groupName
         */
        private numLoadedDic;
        /**
         * 正在加载的组列表,key为groupName
         */
        private itemListDic;
        /**
         * 加载失败的组,key为groupName
         */
        private groupErrorDic;
        private retryTimesDic;
        maxRetryTimes: number;
        private failedList;
        /**
         * 优先级队列,key为priority，value为groupName列表
         */
        private priorityQueue;
        /**
         * 检查指定的组是否正在加载中
         * @method RES.ResourceLoader#isGroupInLoading
         * @param groupName {string}
         * @returns {boolean}
         */
        isGroupInLoading(groupName: string): boolean;
        /**
         * 开始加载一组文件
         * @method RES.ResourceLoader#loadGroup
         * @param list {egret.Array<ResourceItem>} 加载项列表
         * @param groupName {string} 组名
         * @param priority {number} 加载优先级
         */
        loadGroup(list: Array<ResourceItem>, groupName: string, priority?: number): void;
        /**
         * 延迟加载队列
         */
        private lazyLoadList;
        /**
         * 加载一个文件
         * @method RES.ResourceLoader#loadItem
         * @param resItem {egret.ResourceItem} 要加载的项
         */
        loadItem(resItem: ResourceItem): void;
        /**
         * 资源解析库字典类
         */
        private analyzerDic;
        /**
         * 加载下一项
         */
        private next();
        /**
         * 当前应该加载同优先级队列的第几列
         */
        private queueIndex;
        /**
         * 获取下一个待加载项
         */
        private getOneResourceItem();
        /**
         * 加载结束
         */
        private onItemComplete(resItem);
        /**
         * 从优先级队列中移除指定的组名
         */
        private removeGroupName(groupName);
    }
}
declare module RES {
    
    /**
     * @language zh_CN
     * 资源加载事件。
     * @version Egret 2.4
     * @platform Web,Native
     */
    class ResourceEvent extends egret.Event {
        
        /**
         * @language zh_CN
         * 一个加载项加载失败事件。
         * @version Egret 2.4
         * @platform Web,Native
         */
        static ITEM_LOAD_ERROR: string;
        
        /**
         * @language zh_CN
         * 配置文件加载并解析完成事件。注意：若有配置文件加载失败，将不会抛出此事件，若要处理配置加载失败，请同时监听 CONFIG_LOAD_ERROR 事件。
         * @version Egret 2.4
         * @platform Web,Native
         */
        static CONFIG_COMPLETE: string;
        
        /**
         * @language zh_CN
         * 配置文件加载失败事件。
         * @version Egret 2.4
         * @platform Web,Native
         */
        static CONFIG_LOAD_ERROR: string;
        
        /**
         * @language zh_CN
         * 延迟加载组资源加载进度事件。
         * @version Egret 2.4
         * @platform Web,Native
         */
        static GROUP_PROGRESS: string;
        
        /**
         * @language zh_CN
         * 延迟加载组资源加载完成事件。注意：若组内有资源项加载失败，将不会抛出此事件，若要处理组加载失败，请同时监听 GROUP_LOAD_ERROR 事件。
         * @version Egret 2.4
         * @platform Web,Native
         */
        static GROUP_COMPLETE: string;
        
        /**
         * @language zh_CN
         * 延迟加载组资源加载失败事件。
         * @version Egret 2.4
         * @platform Web,Native
         */
        static GROUP_LOAD_ERROR: string;
        
        /**
         * @language zh_CN
         * 创建一个作为参数传递给事件侦听器的 Event 对象。
         * @param type  事件的类型，可以作为 Event.type 访问。
         * @param bubbles  确定 Event 对象是否参与事件流的冒泡阶段。默认值为 false。
         * @param cancelable 确定是否可以取消 Event 对象。默认值为 false。
         * @version Egret 2.4
         * @platform Web,Native
         * @private
         */
        constructor(type: string, bubbles?: boolean, cancelable?: boolean);
        
        /**
         * @language zh_CN
         * 已经加载的文件数。
         * @version Egret 2.4
         * @platform Web,Native
         */
        itemsLoaded: number;
        
        /**
         * @language zh_CN
         * 要加载的总文件数。
         * @version Egret 2.4
         * @platform Web,Native
         */
        itemsTotal: number;
        
        /**
         * @language zh_CN
         * 资源组名。
         * @version Egret 2.4
         * @platform Web,Native
         */
        groupName: string;
        
        /**
         * @language zh_CN
         * 一次加载项加载结束的项信息对象。
         * @version Egret 2.4
         * @platform Web,Native
         */
        resItem: ResourceItem;
        /**
         * 使用指定的EventDispatcher对象来抛出事件对象。抛出的对象将会缓存在对象池上，供下次循环复用。
         * @method RES.ResourceEvent.dispatchResourceEvent
         * @param target {egret.IEventDispatcher}
         * @param type {string}
         * @param groupName {string}
         * @param resItem {egret.ResourceItem}
         * @param itemsLoaded {number}
         * @param itemsTotal {number}
         * @private
         */
        static dispatchResourceEvent(target: egret.IEventDispatcher, type: string, groupName?: string, resItem?: ResourceItem, itemsLoaded?: number, itemsTotal?: number): boolean;
    }
}
declare module RES {
    /**
     * @classic
     * @private
     */
    class AnalyzerBase extends egret.HashObject {
        constructor();
        private resourceConfig;
        /**
         * 添加一个二级键名到配置列表。
         * @method RES.ResourceConfig#addSubkey
         * @param subkey {string} 要添加的二级键名
         * @param name {string} 二级键名所属的资源name属性
         */
        addSubkey(subkey: string, name: string): void;
        /**
         * 加载一个资源文件
         * @param resItem 加载项信息
         * @param compFunc 加载完成回调函数,示例:compFunc(resItem:ResourceItem):void;
         * @param thisObject 加载完成回调函数的this引用
         */
        loadFile(resItem: ResourceItem, compFunc: Function, thisObject: any): void;
        /**
         * 同步方式获取解析完成的数据
         * @param name 对应配置文件里的name属性。
         */
        getRes(name: string): any;
        /**
         * 销毁某个资源文件的二进制数据,返回是否删除成功。
         * @param name 配置文件中加载项的name属性
         */
        destroyRes(name: string): boolean;
        /**
         * 读取一个字符串里第一个点之前的内容。
         * @param name {string} 要读取的字符串
         */
        static getStringPrefix(name: string): string;
        /**
         * 读取一个字符串里第一个点之后的内容。
         * @param name {string} 要读取的字符串
         */
        static getStringTail(name: string): string;
    }
}
declare module RES {
    /**
     * @private
     */
    class BinAnalyzer extends AnalyzerBase {
        /**
         * 构造函数
         */
        constructor();
        /**
         * 字节流数据缓存字典
         */
        fileDic: any;
        /**
         * 加载项字典
         */
        resItemDic: Array<any>;
        /**
         * @inheritDoc
         */
        loadFile(resItem: ResourceItem, compFunc: Function, thisObject: any): void;
        _dataFormat: string;
        /**
         * Loader对象池
         */
        protected recycler: egret.HttpRequest[];
        /**
         * 获取一个URLLoader对象
         */
        private getRequest();
        /**
         * 一项加载结束
         */
        onLoadFinish(event: egret.Event): void;
        /**
         * 解析并缓存加载成功的数据
         */
        analyzeData(resItem: ResourceItem, data: any): void;
        /**
         * @inheritDoc
         */
        getRes(name: string): any;
        /**
         * @inheritDoc
         */
        hasRes(name: string): boolean;
        /**
         * @inheritDoc
         */
        destroyRes(name: string): boolean;
        protected onResourceDestroy(resource: any): void;
    }
}
declare module RES {
    /**
     * @private
     */
    class ImageAnalyzer extends AnalyzerBase {
        /**
         * 构造函数
         */
        constructor();
        /**
         * 字节流数据缓存字典
         */
        protected fileDic: any;
        /**
         * 加载项字典
         */
        protected resItemDic: Array<any>;
        /**
         * @inheritDoc
         */
        loadFile(resItem: ResourceItem, compFunc: Function, thisObject: any): void;
        /**
         * Loader对象池
         */
        protected recycler: egret.ImageLoader[];
        /**
         * 获取一个Loader对象
         */
        private getLoader();
        /**
         * 一项加载结束
         */
        protected onLoadFinish(event: egret.Event): void;
        /**
         * 解析并缓存加载成功的数据
         */
        protected analyzeData(resItem: ResourceItem, texture: egret.Texture): void;
        /**
         * @inheritDoc
         */
        getRes(name: string): any;
        /**
         * @inheritDoc
         */
        hasRes(name: string): boolean;
        /**
         * @inheritDoc
         */
        destroyRes(name: string): boolean;
        protected onResourceDestroy(texture: any): void;
    }
}
declare module RES {
    /**
     * @private
     */
    class TextAnalyzer extends BinAnalyzer {
        constructor();
    }
}
declare module RES {
    /**
     * @private
     */
    class JsonAnalyzer extends BinAnalyzer {
        constructor();
        /**
         * 解析并缓存加载成功的数据
         */
        analyzeData(resItem: ResourceItem, data: any): void;
    }
}
declare module RES {
    /**
     * SpriteSheet解析器
     * @private
     */
    class SheetAnalyzer extends BinAnalyzer {
        constructor();
        getRes(name: string): any;
        /**
         * 一项加载结束
         */
        onLoadFinish(event: egret.Event): void;
        sheetMap: any;
        private textureMap;
        /**
         * 解析并缓存加载成功的配置文件
         */
        analyzeConfig(resItem: ResourceItem, data: string): string;
        /**
         * 解析并缓存加载成功的位图数据
         */
        analyzeBitmap(resItem: ResourceItem, texture: egret.Texture): void;
        /**
         * 获取相对位置
         */
        getRelativePath(url: string, file: string): string;
        protected parseSpriteSheet(texture: egret.Texture, data: any, name: string): egret.SpriteSheet;
        destroyRes(name: string): boolean;
        /**
         * ImageLoader对象池
         */
        private recyclerIamge;
        private loadImage(url, data);
        private getImageLoader();
        protected onResourceDestroy(texture: any): void;
    }
}
declare module RES {
    /**
     * @private
     */
    class FontAnalyzer extends SheetAnalyzer {
        constructor();
        analyzeConfig(resItem: ResourceItem, data: string): string;
        analyzeBitmap(resItem: ResourceItem, texture: egret.Texture): void;
        private getTexturePath(url, fntText);
        protected onResourceDestroy(font: egret.BitmapFont): void;
    }
}
declare module RES {
    /**
     * @private
     */
    class SoundAnalyzer extends AnalyzerBase {
        /**
         * 构造函数
         */
        constructor();
        /**
         * 字节流数据缓存字典
         */
        protected soundDic: any;
        /**
         * 加载项字典
         */
        protected resItemDic: Array<any>;
        /**
         * @inheritDoc
         */
        loadFile(resItem: ResourceItem, callBack: Function, thisObject: any): void;
        /**
         * 一项加载结束
         */
        protected onLoadFinish(event: egret.Event): void;
        /**
         * 解析并缓存加载成功的数据
         */
        protected analyzeData(resItem: ResourceItem, data: egret.Sound): void;
        /**
         * @inheritDoc
         */
        getRes(name: string): any;
        /**
         * @inheritDoc
         */
        hasRes(name: string): boolean;
        /**
         * @inheritDoc
         */
        destroyRes(name: string): boolean;
    }
}
declare module RES {
    /**
     * @private
     */
    class XMLAnalyzer extends BinAnalyzer {
        constructor();
        /**
         * 解析并缓存加载成功的数据
         */
        analyzeData(resItem: ResourceItem, data: any): void;
    }
}
declare module RES {
    
    /**
     * @language zh_CN
     * 版本控制加载的接口
     * @version Egret 2.4
     * @platform Web,Native
     * @includeExample extension/version/VersionControl.ts
     */
    interface IVersionController {
        
        /**
         * @language zh_CN
         * 获取版本信息数据。<br/>
         * 这个方法的调用需要在应用程序进行任何资源加载之前，建议在应用程序的入口类（Main）的开始最先进行调用处理。此方法只负责获取版本信息，不负责资源的下载。
         * @version Egret 2.4
         * @platform Web,Native
         */
        fetchVersion(callback: egret.AsyncCallback): void;
        
        /**
         * @language zh_CN
         * 获取所有有变化的文件。<br/>
         * 主要应用在native场景中。这里的变化包括新增文件、更新文件（文件名相同，但更改过的文件）。<br/>
         * @returns 所有有变化的文件列表。在Web端此列表为空。
         * @version Egret 2.4
         * @platform Web,Native
         */
        getChangeList(): Array<{
            url: string;
            size: number;
        }>;
        
        /**
         * @language zh_CN
         * 获取资源文件实际的URL地址。<br/>
         * 由于版本控制实际已经对原来的资源文件的URL进行了改变，因此想获取指定资源文件实际的URL时需要调用此方法。<br/>
         * 在开发调试阶段，这个方法会直接返回传入的参数值。
         * @param url 游戏中使用的url
         * @returns 实际加载的url
         * @version Egret 2.4
         * @platform Web,Native
         */
        getVirtualUrl(url: string): string;
    }
    
    /**
     * @language zh_CN
     * 管理版本控制的类
     * @version Egret 2.4
     * @platform Web,Native
     * @event egret.Event.COMPLETE 版本控制加载完成时抛出
     * @event egret.IOErrorEvent.IO_ERROR 版本控制加载失败时抛出
     * @includeExample extension/version/VersionControl.ts
     */
    interface VersionController extends IVersionController {
    }
    /**
     * @version Egret 2.4
     * @platform Web,Native
     */
    var VersionController: {
        
        /**
         * @language zh_CN
         * 初始化构造函数
         */
        new (): VersionController;
    };
}
declare module RES.web {
    /**
     * @private
     */
    class Html5VersionController extends egret.EventDispatcher implements VersionController {
        constructor();
        private _versionInfo;
        fetchVersion(callback: egret.AsyncCallback): void;
        /**
         * 获取所有有变化的文件
         * @returns {Array<any>}
         */
        getChangeList(): Array<{
            url: string;
            size: number;
        }>;
        getVirtualUrl(url: string): string;
    }
}
declare module RES.native {
    /**
     * @private
     */
    class NativeVersionController implements VersionController {
        private _versionInfo;
        private _versionPath;
        private _localFileArr;
        constructor();
        fetchVersion(callback: egret.AsyncCallback): void;
        private getList(callback, type, root?);
        /**
         * 获取所有有变化的文件
         * @returns {Array<any>}
         */
        getChangeList(): Array<{
            url: string;
            size: number;
        }>;
        getVirtualUrl(url: string): string;
        private getLocalData(filePath);
    }
}
declare module RES {
    
    /**
     * @language zh_CN
     * 以类定义为值进行映射注入。
     * @param type 注入的类型。
     * @param analyzerClass 注入类型需要解析的类。
     * @version Egret 2.4
     * @platform Web,Native
     * @includeExample extension/resource/Resource.ts
     */
    function registerAnalyzer(type: string, analyzerClass: any): void;
    
    /**
     * @language zh_CN
     * 注册版本控制器,通过RES模块加载资源时会从版本控制器获取真实url
     * @param vcs 注入的版本控制器。
     * @version Egret 2.5
     * @platform Web,Native
     */
    function registerVersionController(vcs: VersionController): void;
    
    /**
     * @language zh_CN
     * 获得版本控制器.
     * @version Egret 2.5
     * @platform Web,Native
     */
    function getVersionController(): VersionController;
    
    /**
     * @language zh_CN
     * 加载配置文件并解析。
     * @param url 配置文件路径(resource.json的路径)。
     * @param resourceRoot 资源根路径。配置中的所有url都是这个路径的相对值。最终url是这个字符串与配置里资源项的url相加的值。
     * @param type 配置文件的格式。确定要用什么解析器来解析配置文件。默认"json"
     * @see #setMaxRetryTimes
     * @version Egret 2.4
     * @platform Web,Native
     */
    function loadConfig(url: string, resourceRoot?: string, type?: string): void;
    
    /**
     * @language zh_CN
     * 根据组名加载一组资源。
     * @param name 要加载资源组的组名。
     * @param priority 加载优先级,可以为负数,默认值为 0。
     * <br>低优先级的组必须等待高优先级组完全加载结束才能开始，同一优先级的组会同时加载。
     * @see #setMaxRetryTimes
     * @version Egret 2.4
     * @platform Web,Native
     */
    function loadGroup(name: string, priority?: number): void;
    
    /**
     * @language zh_CN
     * 检查某个资源组是否已经加载完成。
     * @param name 组名。
     * @returns 是否正在加载。
     * @see #setMaxRetryTimes
     * @version Egret 2.4
     * @platform Web,Native
     */
    function isGroupLoaded(name: string): boolean;
    
    /**
     * @language zh_CN
     * 根据组名获取组加载项列表。
     * @param name 组名。
     * @returns 加载项列表。
     * @see RES.ResourceItem
     * @see #setMaxRetryTimes
     * @version Egret 2.4
     * @platform Web,Native
     */
    function getGroupByName(name: string): Array<ResourceItem>;
    
    /**
     * @language zh_CN
     * 创建自定义的加载资源组,注意：此方法仅在资源配置文件加载完成后执行才有效。
     * <br>可以监听 ResourceEvent.CONFIG_COMPLETE 事件来确认配置加载完成。
     * @param name 要创建的加载资源组的组名。
     * @param keys 要包含的键名列表，key 对应配置文件里的 name 属性或 sbuKeys 属性的一项或一个资源组名。
     * @param override 是否覆盖已经存在的同名资源组,默认 false。
     * @returns 是否创建成功。
     * @see #setMaxRetryTimes
     * @version Egret 2.4
     * @platform Web,Native
     */
    function createGroup(name: string, keys: Array<string>, override?: boolean): boolean;
    
    /**
     * @language zh_CN
     * 检查配置文件里是否含有指定的资源。
     * @param key 对应配置文件里的 name 属性或 sbuKeys 属性的一项。
     * @see #setMaxRetryTimes
     * @version Egret 2.4
     * @platform Web,Native
     */
    function hasRes(key: string): boolean;
    
    /**
     * @language zh_CN
     * 运行时动态解析一个配置文件,此操作不会清空之前已存在的配置。
     * @param data 配置文件数据，请参考 resource.json 的配置文件格式。传入对应的 json 对象即可。
     * @param folder 加载项的路径前缀。
     * @see #setMaxRetryTimes
     * @version Egret 2.4
     * @platform Web,Native
     */
    function parseConfig(data: any, folder?: string): void;
    
    /**
     * @language zh_CN
     * 同步方式获取缓存的已经加载成功的资源。
     * <br>资源类型和对应的返回值类型关系如下：
     * <br>RES.ResourceItem.TYPE_BIN : ArrayBuffer JavaScript 原生对象
     * <br>RES.ResourceItem.TYPE_IMAGE : img Html 对象，或者 egret.BitmapData 接口。
     * <br>RES.ResourceItem.TYPE_JSON : Object
     * <br>RES.ResourceItem.TYPE_SHEET : Object
     * <br>  1. 如果传入的参数是整个 SpriteSheet 的名称返回的是 {"image1":Texture,"image2":Texture} 这样的格式。
     * <br>  2. 如果传入的是 "sheet.image1"，返回的是单个资源。
     * <br>  3. 如果传入的是 "image1" 单个资源的名称，返回的是单个资源。但是如果有两张 SpriteSheet 中有单个图片资源名称相同，返回的是后加载的那个图片资源。
     * <br>RES.ResourceItem.TYPE_SOUND : HtmlSound Html 对象
     * <br>RES.ResourceItem.TYPE_TEXT : string
     * @param key 对应配置文件里的 name 属性或 subKeys 属性的一项。
     * @see RES.ResourceItem
     * @see #setMaxRetryTimes
     * @version Egret 2.4
     * @platform Web,Native
     */
    function getRes(key: string): any;
    
    /**
     * @language zh_CN
     * 异步方式获取配置里的资源。只要是配置文件里存在的资源，都可以通过异步方式获取。
     * @param key 对应配置文件里的 name 属性或 sbuKeys 属性的一项。
     * @param compFunc 回调函数。示例：compFunc(data,key):void。
     * @param thisObject 回调函数的 this 引用。
     * @see #setMaxRetryTimes
     * @version Egret 2.4
     * @platform Web,Native
     */
    function getResAsync(key: string, compFunc: Function, thisObject: any): void;
    
    /**
     * @language zh_CN
     * 通过完整URL方式获取外部资源。
     * @param url 要加载文件的外部路径。
     * @param compFunc 回调函数。示例：compFunc(data,url):void。
     * @param thisObject 回调函数的 this 引用。
     * @param type 文件类型(可选)。请使用 ResourceItem 类中定义的静态常量。若不设置将根据文件扩展名生成。
     * @version Egret 2.4
     * @platform Web,Native
     * @includeExample extension/resource/GetResByUrl.ts
     */
    function getResByUrl(url: string, compFunc: Function, thisObject: any, type?: string): void;
    
    /**
     * @language zh_CN
     * 销毁单个资源文件或一组资源的缓存数据,返回是否删除成功。
     * @param name 配置文件中加载项的name属性或资源组名。
     * @param force 销毁一个资源组时其他资源组有同样资源情况资源是否会被删除，默认值 true。
     * @see #setMaxRetryTimes
     * @returns 是否销毁成功。
     * @version Egret 2.4
     * @platform Web,Native
     */
    function destroyRes(name: string, force?: boolean): boolean;
    
    /**
     * @language zh_CN
     * 设置最大并发加载线程数量，默认值是 2。
     * @param thread 要设置的并发加载数。
     * @see #setMaxRetryTimes
     * @version Egret 2.4
     * @platform Web,Native
     */
    function setMaxLoadingThread(thread: number): void;
    
    /**
     * @language zh_CN
     * 设置资源加载失败时的重试次数，默认值是 3。
     * @param retry 要设置的重试次数。
     * @includeExample extension/resource/Resource.ts
     * @version Egret 2.4
     * @platform Web,Native
     */
    function setMaxRetryTimes(retry: number): void;
    
    /**
     * @language zh_CN
     * 添加事件侦听器,参考 ResourceEvent 定义的常量。
     * @param type 事件的类型。
     * @param listener 处理事件的侦听器函数。此函数必须接受 Event 对象作为其唯一的参数，并且不能返回任何结果，
     * 如下面的示例所示： function(evt:Event):void 函数可以有任何名称。
     * @param thisObject 侦听函数绑定的 this 对象。
     * @param useCapture 确定侦听器是运行于捕获阶段还是运行于目标和冒泡阶段。如果将 useCapture 设置为 true，
     * 则侦听器只在捕获阶段处理事件，而不在目标或冒泡阶段处理事件。如果 useCapture 为 false，则侦听器只在目标或冒泡阶段处理事件。
     * 要在所有三个阶段都侦听事件，请调用 addEventListener 两次：一次将 useCapture 设置为 true，一次将 useCapture 设置为 false。
     * @param priority 事件侦听器的优先级。优先级由一个带符号的 32 位整数指定。数字越大，优先级越高。优先级为 n 的所有侦听器会在
     * 优先级为 n -1 的侦听器之前得到处理。如果两个或更多个侦听器共享相同的优先级，则按照它们的添加顺序进行处理。默认优先级为 0。
     * @see RES.ResourceEvent
     * @see #setMaxRetryTimes
     * @version Egret 2.4
     * @platform Web,Native
     */
    function addEventListener(type: string, listener: (event: egret.Event) => void, thisObject: any, useCapture?: boolean, priority?: number): void;
    
    /**
     * @language zh_CN
     * 移除事件侦听器,参考ResourceEvent定义的常量。
     * @param type 事件名。
     * @param listener 侦听函数。
     * @param thisObject 侦听函数绑定的this对象。
     * @param useCapture 是否使用捕获，这个属性只在显示列表中生效。
     * @version Egret 2.4
     * @platform Web,Native
     */
    function removeEventListener(type: string, listener: (event: egret.Event) => void, thisObject: any, useCapture?: boolean): void;
    function $getVirtualUrl(url: any): any;
}
declare module RES {
    /**
     * SpriteSheet解析器
     * @private
     */
    class AnimationAnalyzer extends BinAnalyzer {
        constructor();
        /**
         * 一项加载结束
         */
        onLoadFinish(event: egret.Event): void;
        sheetMap: any;
        /**
         * 解析并缓存加载成功的配置文件
         */
        analyzeConfig(resItem: ResourceItem, data: string): string;
        /**
         * 解析并缓存加载成功的位图数据
         */
        analyzeBitmap(resItem: ResourceItem, data: egret.BitmapData): void;
        /**
         * 获取相对位置
         */
        getRelativePath(url: string, file: string): string;
        private parseAnimation(bitmapData, data, name);
        destroyRes(name: string): boolean;
        /**
         * ImageLoader对象池
         */
        private recyclerIamge;
        private loadImage(url, data);
        private getImageLoader();
    }
}
declare module egret {
}
declare module egret {
}
