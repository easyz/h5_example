declare var DEBUG: boolean;
declare var RELEASE: boolean;
declare module egret {
    function $error(code: number, ...params: any[]): void;
    function $warn(code: number, ...params: any[]): void;
    function getString(code: number, ...params: any[]): string;
    function $markReadOnly(instance: any, property: string, isProperty?: boolean): void;
    function $markCannotUse(instance: any, property: string, defaultVale: any): void;
}
declare module egret {
    
    /**
     * @language zh_CN
     * 为一个类定义注册运行时类信息,用此方法往类定义上注册它自身以及所有接口对应的字符串。
     * 在运行时，这个类的实例将可以使用 egret.is() 方法传入一个字符串来判断实例类型。
     * @example 以下代码演示了如何为EventDispatcher类注册运行时类信息并判断类型：
     * <pre>
     *      //为egret.EventDispatcher类注册运行时类信息，由于它实现了IEventDispatcher接口，这里应同时传入接口名对应的字符串。
     *      egret.registerClass(egret.EventDispatcher,"egret.EventDispatcher",["egret.IEventDispatcher"]);
     *      var dispatcher = new egret.EventDispatcher();
     *      egret.log(egret.is(dispatcher, "egret.IEventDispatcher"));  //true。
     *      egret.log(egret.is(dispatcher, "egret.EventDispatcher"));   //true。
     *      egret.log(egret.is(dispatcher, "egret.Bitmap"));   //false。
     * </pre>
     * 注意：若您使用 TypeScript 来编写程序，egret 命令行会自动帮您生成类信息注册代码行到最终的 Javascript 文件中。因此您不需要手动调用此方法。
     *
     * @param classDefinition 要注册的类定义。
     * @param className 要注册的类名。
     * @param interfaceNames 要注册的类所实现的接口名列表。
     * @version Egret 2.4
     * @platform Web,Native
     */
    function registerClass(classDefinition: any, className: string, interfaceNames?: string[]): void;
}
declare function __extends(d: any, b: any): void;
declare var __define: any;
declare module egret {
    
    /**
     * @language zh_CN
     * Egret顶级对象。框架内所有对象的基类，为对象实例提供唯一的hashCode值。
     * @version Egret 2.4
     * @platform Web,Native
     */
    interface IHashObject {
        
        /**
         * @language zh_CN
         * 返回此对象唯一的哈希值,用于唯一确定一个对象。hashCode为大于等于1的整数。
         * @version Egret 2.4
         * @platform Web,Native
         * @readOnly
         */
        hashCode: number;
    }
    /**
     * @private
     * 哈希计数
     */
    var $hashCount: number;
    
    /**
     * @language zh_CN
     * Egret顶级对象。框架内所有对象的基类，为对象实例提供唯一的hashCode值。
     * @version Egret 2.4
     * @platform Web,Native
     */
    class HashObject implements IHashObject {
        
        /**
         * @language zh_CN
         * 创建一个 HashObject 对象
         * @version Egret 2.4
         * @platform Web,Native
         */
        constructor();
        /**
         * @private
         */
        $hashCode: number;
        
        /**
         * @language zh_CN
         * 返回此对象唯一的哈希值,用于唯一确定一个对象。hashCode为大于等于1的整数。
         * @version Egret 2.4
         * @platform Web,Native
         */
        hashCode: number;
    }
    /**
     * @private
     */
    interface AsyncCallback {
        onSuccess: (data: any) => any;
        onFail: (error: number, data: any) => any;
    }
}
declare module egret {
    
    /**
     * @language zh_CN
     * EventDispatcher 是 Egret 的事件派发器类，负责进行事件的发送和侦听。
     * 事件目标是事件如何通过显示列表层次结构这一问题的焦点。当发生鼠标单击、触摸或按键等事件时，
     * 框架会将事件对象调度到从显示列表根开始的事件流中。然后该事件对象在显示列表中前进，直到到达事件目标，
     * 然后从这一点开始其在显示列表中的回程。在概念上，到事件目标的此往返行程被划分为三个阶段：
     * 捕获阶段包括从根到事件目标节点之前的最后一个节点的行程，目标阶段仅包括事件目标节点，冒泡阶段包括回程上遇到的任何后续节点到显示列表的根。
     * 通常，使用户定义的类能够调度事件的最简单方法是扩展 EventDispatcher。如果无法扩展（即，如果该类已经扩展了另一个类），则可以实现
     * IEventDispatcher 接口，创建 EventDispatcher 成员，并编写一些简单的映射，将调用连接到聚合的 EventDispatcher 中。
     * @see egret.IEventDispatcher
     * @version Egret 2.4
     * @platform Web,Native
     * @includeExample egret/events/EventDispatcher.ts
     */
    class EventDispatcher extends HashObject implements IEventDispatcher {
        
        /**
         * @language zh_CN
         * 创建一个 EventDispatcher 类的实例
         * @param target 此 EventDispatcher 所抛出事件对象的 target 指向。此参数主要用于一个实现了 IEventDispatcher 接口的自定义类，
         * 以便抛出的事件对象的 target 属性可以指向自定义类自身。请勿在直接继承 EventDispatcher 的情况下使用此参数。
         * @version Egret 2.4
         * @platform Web,Native
         */
        constructor(target?: IEventDispatcher);
        /**
         * @private
         */
        $EventDispatcher: Object;
        /**
         * @private
         *
         * @param useCapture
         */
        $getEventMap(useCapture?: boolean): any;
        /**
         * @inheritDoc
         * @version Egret 2.4
         * @platform Web,Native
         */
        addEventListener(type: string, listener: Function, thisObject: any, useCapture?: boolean, priority?: number): void;
        /**
         * @inheritDoc
         * @version Egret 2.4
         * @platform Web,Native
         */
        once(type: string, listener: Function, thisObject: any, useCapture?: boolean, priority?: number): void;
        /**
         * @private
         */
        $addListener(type: string, listener: Function, thisObject: any, useCapture?: boolean, priority?: number, dispatchOnce?: boolean): void;
        $insertEventBin(list: Array<any>, type: string, listener: Function, thisObject: any, useCapture?: boolean, priority?: number, dispatchOnce?: boolean): boolean;
        /**
         * @inheritDoc
         * @version Egret 2.4
         * @platform Web,Native
         */
        removeEventListener(type: string, listener: Function, thisObject: any, useCapture?: boolean): void;
        $removeEventBin(list: Array<any>, listener: Function, thisObject: any): boolean;
        /**
         * @inheritDoc
         * @version Egret 2.4
         * @platform Web,Native
         */
        hasEventListener(type: string): boolean;
        /**
         * @inheritDoc
         * @version Egret 2.4
         * @platform Web,Native
         */
        willTrigger(type: string): boolean;
        /**
         * @inheritDoc
         * @version Egret 2.4
         * @platform Web,Native
         */
        dispatchEvent(event: Event): boolean;
        /**
         * @private
         */
        $notifyListener(event: Event, capturePhase: boolean): boolean;
        
        /**
         * @language zh_CN
         * 派发一个指定参数的事件。
         * @param type {string} 事件类型
         * @param bubbles {boolean} 确定 Event 对象是否参与事件流的冒泡阶段。默认值为 false。
         * @param data {any} 事件data
         * @version Egret 2.4
         * @platform Web,Native
         */
        dispatchEventWith(type: string, bubbles?: boolean, data?: any): boolean;
    }
}
declare module egret.sys {
    /**
     * @private
     * 事件信息对象
     */
    interface EventBin {
        type: string;
        /**
         * @private
         */
        listener: Function;
        /**
         * @private
         */
        thisObject: any;
        /**
         * @private
         */
        priority: number;
        /**
         * @private
         */
        target: IEventDispatcher;
        /**
         * @private
         */
        useCapture: boolean;
        /**
         * @private
         */
        dispatchOnce: boolean;
    }
}
declare module egret {
    
    /**
     * @language zh_CN
     * Rectangle 对象是按其位置（由它左上角的点 (x, y) 确定）以及宽度和高度定义的区域。<br/>
     * Rectangle 类的 x、y、width 和 height 属性相互独立；更改一个属性的值不会影响其他属性。
     * 但是，right 和 bottom 属性与这四个属性是整体相关的。例如，如果更改 right 属性的值，则 width
     * 属性的值将发生变化；如果更改 bottom 属性，则 height 属性的值将发生变化。
     * @version Egret 2.4
     * @platform Web,Native
     * @includeExample egret/geom/Rectangle.ts
     */
    class Rectangle extends HashObject {
        
        /**
         * @language zh_CN
         * 释放一个Rectangle实例到对象池
         * @version Egret 2.4
         * @platform Web,Native
         */
        static release(rect: Rectangle): void;
        
        /**
         * @language zh_CN
         * 从对象池中取出或创建一个新的Rectangle对象。
         * @version Egret 2.4
         * @platform Web,Native
         */
        static create(): Rectangle;
        
        /**
         * @language zh_CN
         * 创建一个新 Rectangle 对象，其左上角由 x 和 y 参数指定，并具有指定的 width 和 height 参数。
         * @param x 矩形左上角的 x 坐标。
         * @param y 矩形左上角的 y 坐标。
         * @param width 矩形的宽度（以像素为单位）。
         * @param height 矩形的高度（以像素为单位）。
         * @version Egret 2.4
         * @platform Web,Native
         */
        constructor(x?: number, y?: number, width?: number, height?: number);
        
        /**
         * @language zh_CN
         * 矩形左上角的 x 坐标。
         * @default 0
         * @version Egret 2.4
         * @platform Web,Native
         */
        x: number;
        
        /**
         * @language zh_CN
         * 矩形左上角的 y 坐标。
         * @default 0
         * @version Egret 2.4
         * @platform Web,Native
         */
        y: number;
        
        /**
         * @language zh_CN
         * 矩形的宽度（以像素为单位）。
         * @default 0
         * @version Egret 2.4
         * @platform Web,Native
         */
        width: number;
        
        /**
         * @language zh_CN
         * The height of the rectangle, in pixels.
         * @default 0
         * @version Egret 2.4
         * @platform Web,Native
         */
        height: number;
        
        /**
         * @language zh_CN
         * x 和 width 属性的和。
         * @version Egret 2.4
         * @platform Web,Native
         */
        right: number;
        
        /**
         * @language zh_CN
         * y 和 height 属性的和。
         * @version Egret 2.4
         * @platform Web,Native
         */
        bottom: number;
        
        /**
         * @language zh_CN
         * 矩形左上角的 x 坐标。更改 Rectangle 对象的 left 属性对 y 和 height 属性没有影响。但是，它会影响 width 属性，而更改 x 值不会影响 width 属性。
         * left 属性的值等于 x 属性的值。
         * @version Egret 2.4
         * @platform Web,Native
         */
        left: number;
        
        /**
         * @language zh_CN
         * 矩形左上角的 y 坐标。更改 Rectangle 对象的 top 属性对 x 和 width 属性没有影响。但是，它会影响 height 属性，而更改 y 值不会影响 height 属性。<br/>
         * top 属性的值等于 y 属性的值。
         * @version Egret 2.4
         * @platform Web,Native
         */
        top: number;
        
        /**
         * @language zh_CN
         * 由该点的 x 和 y 坐标确定的 Rectangle 对象左上角的位置。
         * @version Egret 2.4
         * @platform Web,Native
         */
        topLeft: Point;
        
        /**
         * @language zh_CN
         * 由 right 和 bottom 属性的值确定的 Rectangle 对象的右下角的位置。
         * @version Egret 2.4
         * @platform Web,Native
         */
        bottomRight: Point;
        
        /**
         * @language zh_CN
         * 将源 Rectangle 对象中的所有矩形数据复制到调用方 Rectangle 对象中。
         * @param sourceRect 要从中复制数据的 Rectangle 对象。
         * @version Egret 2.4
         * @platform Web,Native
         */
        copyFrom(sourceRect: Rectangle): Rectangle;
        
        /**
         * @language zh_CN
         * 将 Rectangle 的成员设置为指定值
         * @param x 矩形左上角的 x 坐标。
         * @param y 矩形左上角的 y 坐标。
         * @param width 矩形的宽度（以像素为单位）。
         * @param height 矩形的高度（以像素为单位）。
         * @version Egret 2.4
         * @platform Web,Native
         */
        setTo(x: number, y: number, width: number, height: number): Rectangle;
        
        /**
         * @language zh_CN
         * 确定由此 Rectangle 对象定义的矩形区域内是否包含指定的点。
         * @param x 检测点的x轴
         * @param y 检测点的y轴
         * @returns 如果检测点位于矩形内，返回true，否则，返回false
         * @version Egret 2.4
         * @platform Web,Native
         */
        contains(x: number, y: number): boolean;
        
        /**
         * @language zh_CN
         * 如果在 toIntersect 参数中指定的 Rectangle 对象与此 Rectangle 对象相交，则返回交集区域作为 Rectangle 对象。如果矩形不相交，
         * 则此方法返回一个空的 Rectangle 对象，其属性设置为 0。
         * @param toIntersect 要对照比较以查看其是否与此 Rectangle 对象相交的 Rectangle 对象。
         * @returns 等于交集区域的 Rectangle 对象。如果该矩形不相交，则此方法返回一个空的 Rectangle 对象；即，其 x、y、width 和
         * height 属性均设置为 0 的矩形。
         * @version Egret 2.4
         * @platform Web,Native
         */
        intersection(toIntersect: Rectangle): Rectangle;
        
        /**
         * @language zh_CN
         * 按指定量增加 Rectangle 对象的大小（以像素为单位）
         * 保持 Rectangle 对象的中心点不变，使用 dx 值横向增加它的大小，使用 dy 值纵向增加它的大小。
         * @param dx Rectangle 对象横向增加的值。
         * @param dy Rectangle 对象纵向增加的值。
         * @version Egret 2.4
         * @platform Web,Native
         */
        inflate(dx: number, dy: number): void;
        /**
         * @private
         */
        $intersectInPlace(clipRect: Rectangle): Rectangle;
        
        /**
         * @language zh_CN
         * 确定在 toIntersect 参数中指定的对象是否与此 Rectangle 对象相交。此方法检查指定的 Rectangle
         * 对象的 x、y、width 和 height 属性，以查看它是否与此 Rectangle 对象相交。
         * @param toIntersect 要与此 Rectangle 对象比较的 Rectangle 对象。
         * @returns 如果两个矩形相交，返回true，否则返回false
         * @version Egret 2.4
         * @platform Web,Native
         */
        intersects(toIntersect: Rectangle): boolean;
        
        /**
         * @language zh_CN
         * 确定此 Rectangle 对象是否为空。
         * @returns 如果 Rectangle 对象的宽度或高度小于等于 0，则返回 true 值，否则返回 false。
         * @version Egret 2.4
         * @platform Web,Native
         */
        isEmpty(): boolean;
        
        /**
         * @language zh_CN
         * 将 Rectangle 对象的所有属性设置为 0。
         * @version Egret 2.4
         * @platform Web,Native
         */
        setEmpty(): void;
        
        /**
         * @language zh_CN
         * 返回一个新的 Rectangle 对象，其 x、y、width 和 height 属性的值与原始 Rectangle 对象的对应值相同。
         * @returns 新的 Rectangle 对象，其 x、y、width 和 height 属性的值与原始 Rectangle 对象的对应值相同。
         * @version Egret 2.4
         * @platform Web,Native
         */
        clone(): Rectangle;
        
        /**
         * @language zh_CN
         * 确定由此 Rectangle 对象定义的矩形区域内是否包含指定的点。
         * 此方法与 Rectangle.contains() 方法类似，只不过它采用 Point 对象作为参数。
         * @param point 包含点对象
         * @returns 如果包含，返回true，否则返回false
         * @version Egret 2.4
         * @platform Web,Native
         */
        containsPoint(point: Point): boolean;
        
        /**
         * @language zh_CN
         * 确定此 Rectangle 对象内是否包含由 rect 参数指定的 Rectangle 对象。
         * 如果一个 Rectangle 对象完全在另一个 Rectangle 的边界内，我们说第二个 Rectangle 包含第一个 Rectangle。
         * @param rect 所检查的 Rectangle 对象
         * @returns 如果此 Rectangle 对象包含您指定的 Rectangle 对象，则返回 true 值，否则返回 false。
         * @version Egret 2.4
         * @platform Web,Native
         */
        containsRect(rect: egret.Rectangle): boolean;
        
        /**
         * @language zh_CN
         * 确定在 toCompare 参数中指定的对象是否等于此 Rectangle 对象。
         * 此方法将某个对象的 x、y、width 和 height 属性与此 Rectangle 对象所对应的相同属性进行比较。
         * @param toCompare 要与此 Rectangle 对象进行比较的矩形。
         * @returns 如果对象具有与此 Rectangle 对象完全相同的 x、y、width 和 height 属性值，则返回 true 值，否则返回 false。
         * @version Egret 2.4
         * @platform Web,Native
         */
        equals(toCompare: Rectangle): boolean;
        
        /**
         * @language zh_CN
         * 增加 Rectangle 对象的大小。此方法与 Rectangle.inflate() 方法类似，只不过它采用 Point 对象作为参数。
         * @param point The x property of this Point object is used to increase the horizontal dimension of the Rectangle object. The y property is used to increase the vertical dimension of the Rectangle object.
         * @version Egret 2.4
         * @platform Web,Native
         */
        inflatePoint(point: Point): void;
        
        /**
         * @language zh_CN
         * 按指定量调整 Rectangle 对象的位置（由其左上角确定）。
         * @param dx 将 Rectangle 对象的 x 值移动此数量。
         * @param dy 将 Rectangle 对象的 t 值移动此数量。
         * @version Egret 2.4
         * @platform Web,Native
         */
        offset(dx: number, dy: number): void;
        
        /**
         * @language zh_CN
         * 将 Point 对象用作参数来调整 Rectangle 对象的位置。此方法与 Rectangle.offset() 方法类似，只不过它采用 Point 对象作为参数。
         * @param point 要用于偏移此 Rectangle 对象的 Point 对象。
         * @version Egret 2.4
         * @platform Web,Native
         */
        offsetPoint(point: Point): void;
        
        /**
         * @language zh_CN
         * 生成并返回一个字符串，该字符串列出 Rectangle 对象的水平位置和垂直位置以及高度和宽度。
         * @returns 一个字符串，它列出了 Rectangle 对象的下列各个属性的值：x、y、width 和 height。
         * @version Egret 2.4
         * @platform Web,Native
         */
        toString(): string;
        
        /**
         * @language zh_CN
         * 通过填充两个矩形之间的水平和垂直空间，将这两个矩形组合在一起以创建一个新的 Rectangle 对象。
         * @param toUnion 要添加到此 Rectangle 对象的 Rectangle 对象。
         * @returns 充当两个矩形的联合的新 Rectangle 对象。
         * @version Egret 2.4
         * @platform Web,Native
         */
        union(toUnion: Rectangle): Rectangle;
        /**
         * @private
         */
        $getBaseWidth(angle: number): number;
        /**
         * @private
         */
        $getBaseHeight(angle: number): number;
    }
    /**
     * @private
     * 仅供框架内复用，要防止暴露引用到外部。
     */
    var $TempRectangle: Rectangle;
}
declare module egret.sys {
    /**
     * @private
     * 显示对象失效标志
     */
    const enum DisplayObjectFlags {
        /**
         * @private
         * 显示对象自身的绘制区域尺寸失效
         */
        InvalidContentBounds = 2,
        /**
         * @private
         * 显示对象的矩形区域尺寸失效，包括自身绘制区域和子项的区域集合
         */
        InvalidBounds = 4,
        /**
         * @private
         * 显示对象的matrix属性失效标志，通常因为scaleX，width等属性发生改变。
         */
        InvalidMatrix = 8,
        /**
         * @private
         * 显示对象祖代的矩阵失效。
         */
        InvalidConcatenatedMatrix = 16,
        /**
         * @private
         * 显示对象祖代的逆矩阵失效。
         */
        InvalidInvertedConcatenatedMatrix = 32,
        /**
         * @private
         * 显示对象祖代的透明度属性失效。
         */
        InvalidConcatenatedAlpha = 64,
        /**
         * @private
         * DrawData失效,需要重新出发render方法.
         */
        InvalidRenderNodes = 128,
        /**
         * @private
         * 显示对象自身需要重绘的标志
         */
        DirtyRender = 256,
        /**
         * @private
         * 子项中已经全部含有DirtyRender标志，无需继续遍历。
         */
        DirtyChildren = 512,
        /**
         * @private
         * DirtyRender|DirtyChildren
         */
        Dirty = 768,
        /**
         * @private
         * 显示对象祖代的是否可见属性失效。
         */
        InvalidConcatenatedVisible = 1024,
        /**
         * @private
         * 添加或删除子项时，需要向子项传递的标志。
         */
        DownOnAddedOrRemoved = 1648,
        /**
         * @private
         * 显示对象初始化时的标志量
         */
        InitFlags = 2032,
    }
}
declare module egret {
    
    /**
     * @language zh_CN
     * DisplayObject 类是可放在显示列表中的所有对象的基类。该显示列表管理运行时中显示的所有对象。使用 DisplayObjectContainer 类排列
     * 显示列表中的显示对象。DisplayObjectContainer 对象可以有子显示对象，而其他显示对象（如 Shape 和 TextField 对象）是“叶”节点，没有子项，只有父级和
     * 同级。DisplayObject 类有一些基本的属性（如确定坐标位置的 x 和 y 属性），也有一些高级的对象属性（如 Matrix 矩阵变换）。<br/>
     * DisplayObject 类包含若干广播事件。通常，任何特定事件的目标均为一个特定的 DisplayObject 实例。例如，added 事件的目标是已添加到显示列表
     * 的目标 DisplayObject 实例。若只有一个目标，则会将事件侦听器限制为只能监听在该目标上（在某些情况下，可监听在显示列表中该目标的祖代上）。
     * 但是对于广播事件，目标不是特定的 DisplayObject 实例，而是所有 DisplayObject 实例（包括那些不在显示列表中的实例）。这意味着您可以向任何
     * DisplayObject 实例添加侦听器来侦听广播事件。
     *
     * @event egret.Event.ADDED 将显示对象添加到显示列表中时调度。
     * @event egret.Event.ADDED_TO_STAGE 在将显示对象直接添加到舞台显示列表或将包含显示对象的子树添加至舞台显示列表中时调度。
     * @event egret.Event.REMOVED 将要从显示列表中删除显示对象时调度。
     * @event egret.Event.REMOVED_FROM_STAGE 在从显示列表中直接删除显示对象或删除包含显示对象的子树时调度。
     * @event egret.Event.ENTER_FRAME [广播事件] 播放头进入新帧时调度。
     * @event egret.Event.RENDER [广播事件] 将要更新和呈现显示列表时调度。
     * @event egret.TouchEvent.TOUCH_MOVE 当用户触碰设备时进行调度，而且会连续调度，直到接触点被删除。
     * @event egret.TouchEvent.TOUCH_BEGIN 当用户第一次触摸启用触摸的设备时（例如，用手指触摸配有触摸屏的移动电话或平板电脑）调度。
     * @event egret.TouchEvent.TOUCH_END 当用户移除与启用触摸的设备的接触时（例如，将手指从配有触摸屏的移动电话或平板电脑上抬起）调度。
     * @event egret.TouchEvent.TOUCH_TAP 当用户在启用触摸设备上的已启动接触的同一 DisplayObject 实例上抬起接触点时（例如，在配有触摸屏的移动电话或平板电脑的显示对象上的某一点处按下并释放手指）调度。
     * @event egret.TouchEvent.TOUCH_RELEASE_OUTSIDE 当用户在启用触摸设备上的已启动接触的不同 DisplayObject 实例上抬起接触点时（例如，在配有触摸屏的移动电话或平板电脑的显示对象上的某一点处按下并释放手指）调度。
     * @version Egret 2.4
     * @platform Web,Native
     * @includeExample egret/display/DisplayObject.ts
     */
    class DisplayObject extends EventDispatcher implements sys.Renderable {
        
        /**
         * @language zh_CN
         * 创建一个显示对象
         * @version Egret 2.4
         * @platform Web,Native
         */
        constructor();
        /**
         * @private
         */
        $DisplayObject: Object;
        /**
         * @private
         */
        $displayFlags: number;
        /**
         * @private
         * 添加一个标志量
         */
        $setFlags(flags: number): void;
        /**
         * @private
         * 移除一个标志量
         */
        $removeFlags(flags: number): void;
        /**
         * @private
         * 沿着显示列表向上移除标志量，如果标志量没被设置过就停止移除。
         */
        $removeFlagsUp(flags: number): void;
        /**
         * @private
         * 是否含有指定的所有标志量
         */
        $hasFlags(flags: number): boolean;
        /**
         * @private
         * 沿着显示列表向上传递标志量，如果标志量已经被设置过就停止传递。
         */
        $propagateFlagsUp(flags: number): void;
        /**
         * @private
         * 沿着显示列表向下传递标志量，非容器直接设置自身的flag，此方法会在 DisplayObjectContainer 中被覆盖。
         */
        $propagateFlagsDown(flags: number): void;
        /**
         * @private
         * 是否含有多个标志量其中之一。
         */
        $hasAnyFlags(flags: number): boolean;
        /**
         * @private
         * 是否添加到舞台上，防止重复发送 removed_from_stage 消息
         */
        $hasAddToStage: boolean;
        /**
         * @private
         * 标记矩阵失效
         */
        private invalidateMatrix();
        /**
         * @private
         * 标记这个显示对象在父级容器的位置发生了改变。
         */
        private invalidatePosition();
        /**
         * @private
         * 能够含有子项的类将子项列表存储在这个属性里。
         */
        $children: DisplayObject[];
        
        /**
         * @language zh_CN
         * 表示 DisplayObject 的实例名称。
         * 通过调用父显示对象容器的 getChildByName() 方法，可以在父显示对象容器的子列表中标识该对象。
         * @version Egret 2.4
         * @platform Web,Native
         */
        name: string;
        /**
         * @private
         */
        $parent: DisplayObjectContainer;
        
        /**
         * @language zh_CN
         * 表示包含此显示对象的 DisplayObjectContainer 对象。
         * 使用 parent 属性可以指定高于显示列表层次结构中当前显示对象的显示对象的相对路径。
         * @version Egret 2.4
         * @platform Web,Native
         */
        parent: DisplayObjectContainer;
        /**
         * @private
         * 设置父级显示对象
         */
        $setParent(parent: DisplayObjectContainer): boolean;
        /**
         * @private
         * 显示对象添加到舞台
         */
        $onAddToStage(stage: Stage, nestLevel: number): void;
        /**
         * @private
         * 显示对象从舞台移除
         */
        $onRemoveFromStage(): void;
        /**
         * @private
         */
        $stage: Stage;
        /**
         * @private
         * 这个对象在显示列表中的嵌套深度，舞台为1，它的子项为2，子项的子项为3，以此类推。当对象不在显示列表中时此属性值为0.
         */
        $nestLevel: number;
        
        /**
         * @language zh_CN
         * 显示对象的舞台。
         * 例如，您可以创建多个显示对象并加载到显示列表中，每个显示对象的 stage 属性是指向相同的 Stage 对象。<br/>
         * 如果显示对象未添加到显示列表，则其 stage 属性会设置为 null。
         * @version Egret 2.4
         * @platform Web,Native
         */
        stage: Stage;
        
        /**
         * @language zh_CN
         * 一个 Matrix 对象，其中包含更改显示对象的缩放、旋转和平移的值。<br/>
         * 注意：要改变一个显示对象矩阵的值，您必引用整个矩阵对象，然后将它重新赋值给显示对象的 matrix 属性。
         * @example 以下代码改变了显示对象矩阵的tx属性值：
         * <pre>
         *     var myMatrix:Matrix = myDisplayObject.matrix;
         *     myMatrix.tx += 10;
         *     myDisplayObject.matrix = myMatrix;
         * </pre>
         * @version Egret 2.4
         * @platform Web,Native
         */
        matrix: Matrix;
        /**
         * @private
         * 获取矩阵
         */
        $getMatrix(): Matrix;
        /**
         * @private
         * 设置矩阵
         */
        $setMatrix(matrix: Matrix, useProperties?: boolean): boolean;
        /**
         * @private
         * 获得这个显示对象以及它所有父级对象的连接矩阵。
         */
        $getConcatenatedMatrix(): Matrix;
        /**
         * @private
         * 获取链接矩阵
         */
        $getInvertedConcatenatedMatrix(): Matrix;
        
        /**
         * @language zh_CN
         * 表示 DisplayObject 实例相对于父级 DisplayObjectContainer 本地坐标的 x 坐标。<br/>
         * 如果该对象位于具有变形的 DisplayObjectContainer 内，则它也位于包含 DisplayObjectContainer 的本地坐标系中。
         * 因此，对于逆时针旋转 90 度的 DisplayObjectContainer，该 DisplayObjectContainer 的子级将继承逆时针旋转 90 度的坐标系。
         * @default 0
         * @version Egret 2.4
         * @platform Web,Native
         */
        x: number;
        /**
         * @private
         * 获取x坐标
         */
        $getX(): number;
        /**
         * @private
         * 设置x坐标
         */
        $setX(value: number): boolean;
        
        /**
         * @language zh_CN
         * 表示 DisplayObject 实例相对于父级 DisplayObjectContainer 本地坐标的 y 坐标。<br/>
         * 如果该对象位于具有变形的 DisplayObjectContainer 内，则它也位于包含 DisplayObjectContainer 的本地坐标系中。
         * 因此，对于逆时针旋转 90 度的 DisplayObjectContainer，该 DisplayObjectContainer 的子级将继承逆时针旋转 90 度的坐标系。
         * @default 0
         * @version Egret 2.4
         * @platform Web,Native
         */
        y: number;
        /**
         * @private
         * 获取y坐标
         */
        $getY(): number;
        /**
         * @private
         * 设置y坐标
         */
        $setY(value: number): boolean;
        
        /**
         * @language zh_CN
         * 表示从注册点开始应用的对象的水平缩放比例（百分比）。<br/>
         * 1.0 等于 100% 缩放。
         * @default 1
         * @version Egret 2.4
         * @platform Web,Native
         */
        scaleX: number;
        /**
         * @private
         *
         * @returns
         */
        $getScaleX(): number;
        /**
         * @private
         * 设置水平缩放值
         */
        $setScaleX(value: number): boolean;
        
        /**
         * @language zh_CN
         * 表示从对象注册点开始应用的对象的垂直缩放比例（百分比）。1.0 是 100% 缩放。
         * @default 1
         * @version Egret 2.4
         * @platform Web,Native
         */
        scaleY: number;
        /**
         * @private
         *
         * @returns
         */
        $getScaleY(): number;
        /**
         * @private
         * 设置垂直缩放值
         */
        $setScaleY(value: number): boolean;
        
        /**
         * @language zh_CN
         * 表示 DisplayObject 实例距其原始方向的旋转程度，以度为单位。
         * 从 0 到 180 的值表示顺时针方向旋转；从 0 到 -180 的值表示逆时针方向旋转。对于此范围之外的值，可以通过加上或
         * 减去 360 获得该范围内的值。例如，myDisplayObject.rotation = 450语句与 myDisplayObject.rotation = 90 是相同的。
         * @default 0
         * @version Egret 2.4
         * @platform Web,Native
         */
        rotation: number;
        /**
         * @private
         *
         * @returns
         */
        $getRotation(): number;
        $setRotation(value: number): boolean;
        /**
         * 表示DisplayObject的x方向斜切
         * @member {number} egret.DisplayObject#skewX
         * @default 0
         * @version Egret 2.4
         * @platform Web,Native
         */
        skewX: number;
        /**
         * @private
         *
         * @param value
         */
        $setSkewX(value: number): boolean;
        /**
         * 表示DisplayObject的y方向斜切
         * @member {number} egret.DisplayObject#skewY
         * @default 0
         * @version Egret 2.4
         * @platform Web,Native
         */
        skewY: number;
        /**
         * @private
         *
         * @param value
         */
        $setSkewY(value: number): boolean;
        
        /**
         * @language zh_CN
         * 表示显示对象的宽度，以像素为单位。宽度是根据显示对象内容的范围来计算的。
         * @version Egret 2.4
         * @platform Web,Native
         */
        width: number;
        /**
         * @private
         * 获取显示宽度
         */
        $getWidth(): number;
        /**
         * @private
         *
         * @returns
         */
        $getExplicitWidth(): number;
        /**
         * @private
         * 设置显示宽度
         */
        $setWidth(value: number): boolean;
        
        /**
         * @language zh_CN
         * 表示显示对象的高度，以像素为单位。高度是根据显示对象内容的范围来计算的。
         * @version Egret 2.4
         * @platform Web,Native
         */
        height: number;
        /**
         * @private
         * 获取显示高度
         */
        $getHeight(): number;
        /**
         * @private
         *
         * @returns
         */
        $getExplicitHeight(): number;
        /**
         * @private
         * 设置显示高度
         */
        $setHeight(value: number): boolean;
        /**
         * 测量宽度
         * @returns {number}
         * @member {egret.Rectangle} egret.DisplayObject#measuredWidth
         * @version Egret 2.4
         * @platform Web,Native
         */
        measuredWidth: number;
        /**
         * 测量高度
         * @returns {number}
         * @member {egret.Rectangle} egret.DisplayObject#measuredWidth
         * @version Egret 2.4
         * @platform Web,Native
         */
        measuredHeight: number;
        
        /**
         * @language zh_CN
         * 表示从对象绝对锚点X。
         * @default 0
         * @version Egret 2.4
         * @platform Web,Native
         */
        anchorOffsetX: number;
        /**
         * @private
         */
        $getAnchorOffsetX(): boolean;
        /**
         * @private
         *
         * @param value
         * @returns
         */
        $setAnchorOffsetX(value: number): boolean;
        
        /**
         * @language zh_CN
         * 表示从对象绝对锚点Y。
         * @default 0
         * @version Egret 2.4
         * @platform Web,Native
         */
        anchorOffsetY: number;
        /**
         * @private
         */
        $getAnchorOffsetY(): boolean;
        /**
         * @private
         *
         * @param value
         * @returns
         */
        $setAnchorOffsetY(value: number): boolean;
        /**
         * @private
         */
        $visible: boolean;
        
        /**
         * @language zh_CN
         * 显示对象是否可见。不可见的显示对象将被禁用。例如，如果实例的 visible 为 false，则无法接受触摸或用户交互操作。
         * @default true
         * @version Egret 2.4
         * @platform Web,Native
         */
        visible: boolean;
        $setVisible(value: boolean): boolean;
        /**
         * @private
         * 获取这个显示对象跟它所有父级透明度的乘积
         */
        $getConcatenatedVisible(): boolean;
        /**
         * @private
         * cacheAsBitmap创建的缓存位图节点。
         */
        $displayList: egret.sys.DisplayList;
        
        /**
         * @language zh_CN
         * 如果设置为 true，则 Egret 运行时将缓存显示对象的内部位图表示形式。此缓存可以提高包含复杂矢量内容的显示对象的性能。
         * 将 cacheAsBitmap 属性设置为 true 后，呈现并不更改，但是，显示对象将自动执行像素贴紧。执行速度可能会大大加快，
         * 具体取决于显示对象内容的复杂性。最好将 cacheAsBitmap 属性与主要具有静态内容且不频繁缩放或旋转的显示对象一起使用。<br/>
         * 注意：在内存超过上限的情况下，即使将 cacheAsBitmap 属性设置为 true，显示对象也不使用位图缓存。
         * @default false
         * @version Egret 2.4
         * @platform Web,Native
         */
        cacheAsBitmap: boolean;
        $setHasDisplayList(value: boolean): void;
        /**
         * @private
         * cacheAsBitmap属性改变
         */
        $cacheAsBitmapChanged(): void;
        /**
         * @private
         */
        $alpha: number;
        
        /**
         * @language zh_CN
         * 表示指定对象的 Alpha 透明度值。
         * 有效值为 0（完全透明）到 1（完全不透明）。alpha 设置为 0 的显示对象是可触摸的，即使它们不可见。
         * @default 1
         * @version Egret 2.4
         * @platform Web,Native
         */
        alpha: number;
        /**
         * @private
         *
         * @param value
         */
        $setAlpha(value: number): boolean;
        /**
         * @private
         * 获取这个显示对象跟它所有父级透明度的乘积
         */
        $getConcatenatedAlpha(): number;
        
        /**
         * @private
         * @language zh_CN
         * 显示对象默认的 touchEnabled 属性
         * @default false
         * @version Egret 2.5
         * @platform Web,Native
         */
        static defaultTouchEnabled: boolean;
        $touchEnabled: boolean;
        
        /**
         * @language zh_CN
         * 指定此对象是否接收触摸或其他用户输入。默认值为 false，这表示默认情况下，显示列表上的任何 DisplayObject 实例都不会接收触摸事件或
         * 其他用户输入事件。如果将 touchEnabled 设置为 false，则实例将不接收任何触摸事件（或其他用户输入事件）。显示列表上的该实例的任
         * 何子级都不会受到影响。要更改显示列表上对象的所有子级的 touchEnabled 行为，请使用 DisplayObjectContainer.touchChildren。
         * @see egret.DisplayObjectContainer#touchChildren
         * @default false
         * @version Egret 2.4
         * @platform Web,Native
         */
        touchEnabled: boolean;
        /**
         * @private
         *
         * @returns
         */
        $getTouchEnabled(): boolean;
        /**
         * @private
         */
        $setTouchEnabled(value: boolean): boolean;
        /**
         * @private
         */
        $scrollRect: Rectangle;
        
        /**
         * @language zh_CN
         * 显示对象的滚动矩形范围。显示对象被裁切为矩形定义的大小，当您更改 scrollRect 对象的 x 和 y 属性时，它会在矩形内滚动。
         * 滚动的显示对象始终以整像素为增量进行滚动。您可以通过设置 scrollRect Rectangle 对象的 x 属性来左右滚动对象， 还可以通过设置
         * scrollRect 对象的 y 属性来上下滚动对象。如果显示对象旋转了 90 度，并且您左右滚动它，则实际上显示对象会上下滚动。<br/>
         *
         * 注意：要改变一个显示对象 scrollRect 属性的值，您必引用整个 scrollRect 对象，然后将它重新赋值给显示对象的 scrollRect 属性。
         * @example 以下代码改变了显示对象 scrollRect 的 x 属性值：
         * <pre>
         *     var myRectangle:Rectangle = myDisplayObject.scrollRect;
         *     myRectangle.x += 10;
         *     myDisplayObject.scrollRect = myRectangle;//设置完scrollRect的x、y、width、height值之后，一定要对myDisplayObject重新赋值scrollRect，不然会出问题。
         * </pre>
         * @version Egret 2.4
         * @platform Web,Native
         */
        scrollRect: Rectangle;
        /**
         * @private
         *
         * @param value
         */
        $setScrollRect(value: Rectangle): boolean;
        /**
         * @private
         */
        $blendMode: number;
        
        /**
         * @language zh_CN
         * BlendMode 枚举中的一个值，用于指定要使用的混合模式，确定如何将一个源（新的）图像绘制到目标（已有）的图像上<br/>
         * 如果尝试将此属性设置为无效值，则运行时会将此值设置为 BlendMode.NORMAL。
         * @default egret.BlendMode.NORMAL
         * @see egret.BlendMode
         * @version Egret 2.4
         * @platform Web,Native
         */
        blendMode: string;
        /**
         * @private
         * 被遮罩的对象
         */
        $maskedObject: DisplayObject;
        /**
         * @private
         */
        $mask: DisplayObject;
        /**
         * @private
         */
        $maskRect: Rectangle;
        
        /**
         * @language zh_CN
         * 调用显示对象被指定的 mask 对象遮罩。要确保当舞台缩放时蒙版仍然有效，mask 显示对象必须处于显示列表的活动部分。
         * 但不绘制 mask 对象本身。将 mask 设置为 null 可删除蒙版。要能够缩放遮罩对象，它必须在显示列表中。要能够拖动蒙版
         * 对象，它必须在显示列表中。<br/>
         * 注意：单个 mask 对象不能用于遮罩多个执行调用的显示对象。在将 mask 分配给第二个显示对象时，会撤消其作为第一个对象的遮罩，
         * 该对象的 mask 属性将变为 null。
         *
         * 下面例子为 mask 为 Rectangle 类型对象，这种情况下，修改 mask 的值后，一定要对 myDisplayObject 重新赋值 mask，不然会出问题。
         * @example 以下代码改变了显示对象 mask 的 x 属性值：
         * <pre>
         *     var myMask:Rectangle = myDisplayObject.mask;
         *     myMask.x += 10;
         *     myDisplayObject.mask = myMask;//设置完 mask 的x、y、width、height值之后，一定要对myDisplayObject重新赋值 mask，不然会出问题。
         * </pre>
         * @version Egret 2.4
         * @platform Web,Native
         */
        mask: DisplayObject | Rectangle;
        $setMaskRect(value: Rectangle): boolean;
        
        /**
         * @language zh_CN
         * 包含当前与显示对象关联的每个滤镜对象的索引数组。
         * 注意 : 目前只有 WebGL 下支持，Canvs 渲染以及 native 均不支持。
         * @version Egret 3.1.0
         * @platform Web
         */
        filters: Array<Filter>;
        /**
         * @private
         * 获取filters
         */
        $getFilters(): Array<Filter>;
        
        /**
         * @language zh_CN
         * 返回一个矩形，该矩形定义相对于 targetCoordinateSpace 对象坐标系的显示对象区域。
         * @param targetCoordinateSpace 定义要使用的坐标系的显示对象。
         * @param resultRect 一个用于存储结果的可复用Rectangle实例，传入此参数能够减少内部创建对象的次数，从而获得更高的运行性能。
         * @returns 定义与 targetCoordinateSpace 对象坐标系统相关的显示对象面积的矩形。
         * @version Egret 2.4
         * @platform Web,Native
         */
        getTransformedBounds(targetCoordinateSpace: DisplayObject, resultRect?: Rectangle): Rectangle;
        
        /**
         * @language zh_CN
         * 获取显示对象的测量边界
         * @param resultRect {Rectangle} 可选参数，传入用于保存结果的Rectangle对象，避免重复创建对象。
         * @param calculateAnchor {boolean} 可选参数，是否会计算锚点。
         * @returns {Rectangle}
         * @version Egret 2.4
         * @platform Web,Native
         */
        getBounds(resultRect?: Rectangle, calculateAnchor?: boolean): egret.Rectangle;
        /**
         * @private
         */
        $getTransformedBounds(targetCoordinateSpace: DisplayObject, resultRect?: Rectangle): Rectangle;
        
        /**
         * @language zh_CN
         * 将从舞台（全局）坐标转换为显示对象的（本地）坐标。
         * @param stageX 舞台坐标x
         * @param stageY 舞台坐标y
         * @param resultPoint 一个用于存储结果的可复用 Point 实例，传入此参数能够减少内部创建对象的次数，从而获得更高的运行性能。
         * @returns 具有相对于显示对象的坐标的 Point 对象。
         * @version Egret 2.4
         * @platform Web,Native
         */
        globalToLocal(stageX?: number, stageY?: number, resultPoint?: Point): Point;
        
        /**
         * @language zh_CN
         * 将显示对象的（本地）坐标转换为舞台（全局）坐标。
         * @param localX 本地坐标 x
         * @param localY 本地坐标 y
         * @param resultPoint 一个用于存储结果的可复用 Point 实例，传入此参数能够减少内部创建对象的次数，从而获得更高的运行性能。
         * @returns 一个具有相对于舞台坐标的 Point 对象。
         * @version Egret 2.4
         * @platform Web,Native
         */
        localToGlobal(localX?: number, localY?: number, resultPoint?: Point): Point;
        /**
         * @private
         * 标记自身的测量尺寸失效
         */
        $invalidateContentBounds(): void;
        /**
         * @private
         * 获取显示对象占用的矩形区域集合，通常包括自身绘制的测量区域，如果是容器，还包括所有子项占据的区域。
         */
        $getOriginalBounds(): Rectangle;
        /**
         * @private
         * 测量子项占用的矩形区域
         * @param bounds 测量结果存储在这个矩形对象内
         */
        $measureChildBounds(bounds: Rectangle): void;
        /**
         * @private
         */
        $getContentBounds(): Rectangle;
        /**
         * @private
         * 测量自身占用的矩形区域，注意：此测量结果并不包括子项占据的区域。
         * @param bounds 测量结果存储在这个矩形对象内
         */
        $measureContentBounds(bounds: Rectangle): void;
        /**
         * @private
         */
        $parentDisplayList: egret.sys.DisplayList;
        /**
         * @private
         * 标记此显示对象需要重绘。此方法会触发自身的cacheAsBitmap重绘。如果只是矩阵改变，自身显示内容并不改变，应该调用$invalidateTransform().
         * @param notiryChildren 是否标记子项也需要重绘。传入false或不传入，将只标记自身需要重绘。注意:当子项cache时不会继续向下标记
         */
        $invalidate(notifyChildren?: boolean): void;
        /**
         * @private
         * 标记自身以及所有子项在父级中变换叠加的显示内容失效。此方法不会触发自身的cacheAsBitmap重绘。
         * 通常用于矩阵改变或从显示列表添加和移除时。若自身的显示内容已经改变需要重绘，应该调用$invalidate()。
         */
        $invalidateTransform(): void;
        /**
         * @private
         * 渲染节点,不为空表示自身有绘制到屏幕的内容
         */
        $renderNode: sys.RenderNode;
        /**
         * @private
         * 获取渲染节点
         */
        $getRenderNode(): sys.RenderNode;
        /**
         * @private
         * 更新对象在舞台上的显示区域,返回显示区域是否发生改变。
         */
        $update(bounds?: Rectangle): boolean;
        private static boundsForUpdate;
        /**
         * @private
         */
        $measureFiltersBounds(bounds: Rectangle): Rectangle;
        /**
         * @private
         * 获取相对于指定根节点的连接矩阵。
         * @param root 根节点显示对象
         * @param matrix 目标显示对象相对于舞台的完整连接矩阵。
         */
        $getConcatenatedMatrixAt(root: DisplayObject, matrix: Matrix): void;
        $getConcatenatedAlphaAt(root: DisplayObject, alpha: number): number;
        /**
         * @private
         * 执行渲染,绘制自身到屏幕
         */
        $render(): void;
        /**
         * @private
         */
        $hitTest(stageX: number, stageY: number): DisplayObject;
        
        /**
         * @language zh_CN
         * 计算显示对象，以确定它是否与 x 和 y 参数指定的点重叠或相交。x 和 y 参数指定舞台的坐标空间中的点，而不是包含显示对象的显示对象容器中的点（除非显示对象容器是舞台）。
         * 注意，不要在大量物体中使用精确碰撞像素检测，这回带来巨大的性能开销
         * @param x {number}  要测试的此对象的 x 坐标。
         * @param y {number}  要测试的此对象的 y 坐标。
         * @param shapeFlag {boolean} 是检查对象 (true) 的实际像素，还是检查边框 (false) 的实际像素。
         * @returns {boolean} 如果显示对象与指定的点重叠或相交，则为 true；否则为 false。
         * @version Egret 2.4
         * @platform Web,Native
         */
        hitTestPoint(x: number, y: number, shapeFlag?: boolean): boolean;
        /**
         * @private
         */
        static $enterFrameCallBackList: DisplayObject[];
        /**
         * @private
         */
        static $renderCallBackList: DisplayObject[];
        /**
         * @private
         */
        $addListener(type: string, listener: Function, thisObject: any, useCapture?: boolean, priority?: number, dispatchOnce?: boolean): void;
        /**
         * @inheritDoc
         * @version Egret 2.4
         * @platform Web,Native
         */
        removeEventListener(type: string, listener: Function, thisObject: any, useCapture?: boolean): void;
        /**
         * @inheritDoc
         * @version Egret 2.4
         * @platform Web,Native
         */
        dispatchEvent(event: Event): boolean;
        /**
         * @private
         * 获取事件流列表。注意：Egret框架的事件流与Flash实现并不一致。
         *
         * 事件流有三个阶段：捕获，目标，冒泡。
         * Flash里默认的的事件监听若不开启useCapture将监听目标和冒泡阶段。若开始capture将只能监听捕获当不包括目标的事件。
         * 可以在Flash中写一个简单的测试：实例化一个非容器显示对象，例如TextField。分别监听useCapture为true和false时的鼠标事件。
         * 点击后将只有useCapture为false的回调函数输出信息。也就带来一个问题「Flash的捕获阶段不能监听到最内层对象本身，只在父级列表有效」。
         *
         * 而HTML里的事件流设置useCapture为true时是能监听到目标阶段的，也就是目标阶段会被触发两次，在捕获和冒泡过程各触发一次。这样可以避免
         * 前面提到的监听捕获无法监听目标本身的问题。
         *
         * Egret最终采用了HTML里目标节点触发两次的事件流方式。
         */
        $getPropagationList(target: DisplayObject): DisplayObject[];
        /**
         * @private
         */
        $dispatchPropagationEvent(event: Event, list: DisplayObject[], targetIndex: number): void;
        /**
         * @inheritDoc
         * @version Egret 2.4
         * @platform Web,Native
         */
        willTrigger(type: string): boolean;
    }
}
declare module egret.sys {
    /**
     * @private
     */
    const enum BitmapKeys {
        bitmapData = 0,
        image = 1,
        bitmapX = 2,
        bitmapY = 3,
        bitmapWidth = 4,
        bitmapHeight = 5,
        offsetX = 6,
        offsetY = 7,
        textureWidth = 8,
        textureHeight = 9,
        smoothing = 10,
        explicitBitmapWidth = 11,
        explicitBitmapHeight = 12,
        sourceWidth = 13,
        sourceHeight = 14,
    }
}
declare module egret {
    
    /**
     * @language zh_CN
     * Bitmap 类表示用于显示位图图片的显示对象。
     * 利用 Bitmap() 构造函数，可以创建包含对 BitmapData 对象引用的 Bitmap 对象。创建了 Bitmap 对象后，
     * 使用父级 DisplayObjectContainer 实例的 addChild() 或 addChildAt() 方法可以将位图放在显示列表中。
     * 一个 Bitmap 对象可在若干 Bitmap 对象之中共享其 texture 引用，与缩放或旋转属性无关。
     * 由于能够创建引用相同 texture 对象的多个 Bitmap 对象，因此，多个显示对象可以使用相同的 texture 对象，
     * 而不会因为每个显示对象实例使用一个 texture 对象而产生额外内存开销。
     *
     * @see egret.Texture
     * @version Egret 2.4
     * @platform Web,Native
     * @includeExample egret/display/Bitmap.ts
     */
    class Bitmap extends DisplayObject {
        
        /**
         * @language zh_CN
         * 创建一个引用指定 BitmapData|Texture 实例的 Bitmap 对象
         * @param value 被引用的 BitmapData|Texture 实例
         * @version Egret 2.4
         * @platform Web,Native
         */
        constructor(value?: BitmapData | Texture);
        /**
         * @private
         */
        $Bitmap: Object;
        /**
         * @private
         * 显示对象添加到舞台
         */
        $onAddToStage(stage: Stage, nestLevel: number): void;
        /**
         * @private
         * 显示对象从舞台移除
         */
        $onRemoveFromStage(): void;
        
        /**
         * @language zh_CN
         * 被引用的 BitmapData 对象。
         * 如果传入构造函数的类型为 Texture 或者最后设置的为 texture，则此值返回 null。
         * @version Egret 2.4
         * @platform Web,Native
         */
        bitmapData: BitmapData;
        
        /**
         * @language zh_CN
         * 被引用的 Texture 对象。
         * 如果传入构造函数的类型为 BitmapData 或者最后设置的为 bitmapData，则此值返回 null。
         * @version Egret 2.4
         * @platform Web,Native
         */
        texture: Texture;
        /**
         * @private
         */
        $setBitmapData(value: BitmapData | Texture): boolean;
        /**
         * @private
         */
        $refreshImageData(): void;
        /**
         * @private
         */
        private setImageData(image, bitmapX, bitmapY, bitmapWidth, bitmapHeight, offsetX, offsetY, textureWidth, textureHeight, sourceWidth, sourceHeight);
        /**
         * @private
         */
        $scale9Grid: egret.Rectangle;
        
        /**
         * @language zh_CN
         * 矩形区域，它定义素材对象的九个缩放区域。
         * 注意:此属性仅在<code>fillMode</code>为<code>BitmapFillMode.SCALE</code>时有效。
         *
         * @version Egret 2.4
         * @platform Web,Native
         */
        scale9Grid: egret.Rectangle;
        /**
         * @private
         */
        $fillMode: string;
        
        /**
         * @language zh_CN
         * 确定位图填充尺寸的方式。
         * <p>设置为 <code>BitmapFillMode.REPEAT</code>时，位图将重复以填充区域。</p>
         * <p>设置为 <code>BitmapFillMode.SCALE</code>时，位图将拉伸以填充区域。</p>
         *
         * @default <code>BitmapFillMode.SCALE</code>
         *
         * @version Egret 2.4
         * @version eui 1.0
         * @platform Web
         */
        fillMode: string;
        $setFillMode(value: string): boolean;
        
        /**
         * @language zh_CN
         * 控制在缩放时是否进行平滑处理的默认值。
         * 在 Bitmap 等对象创建时,smoothing 属性会被设置为该值。
         * @default true。
         * @version Egret 3.0
         * @platform Web
         */
        static defaultSmoothing: boolean;
        
        /**
         * @language zh_CN
         * 控制在缩放时是否对位图进行平滑处理。
         * @version Egret 2.4
         * @platform Web
         */
        smoothing: boolean;
        /**
         * @private
         *
         * @param value
         */
        $setWidth(value: number): boolean;
        /**
         * @private
         *
         * @param value
         */
        $setHeight(value: number): boolean;
        /**
         * @private
         * 获取显示宽度
         */
        $getWidth(): number;
        /**
         * @private
         * 获取显示宽度
         */
        $getHeight(): number;
        /**
         * @private
         */
        $measureContentBounds(bounds: Rectangle): void;
        /**
         * @private
         */
        $render(): void;
        private _pixelHitTest;
        
        /**
         * @language zh_CN
         * 是否开启精确像素碰撞。设置为true显示对象本身的透明区域将能够被穿透。<br/>
         * 注意：若图片资源是以跨域方式从外部服务器加载的，将无法访问图片的像素数据，而导致此属性失效。
         * @default false
         * @version Egret 2.4
         * @platform Web,Native
         */
        pixelHitTest: boolean;
        $hitTest(stageX: number, stageY: number): DisplayObject;
        /**
         * @private
         */
        private hitTestPixel(stageX, stageY);
        /**
         * @private
         */
        static $drawImage(node: sys.BitmapNode, image: any, bitmapX: number, bitmapY: number, bitmapWidth: number, bitmapHeight: number, offsetX: number, offsetY: number, textureWidth: number, textureHeight: number, destW: number, destH: number, sourceWidth: number, sourceHeight: number, scale9Grid: egret.Rectangle, fillMode: string, smoothing: boolean): void;
        /**
         * @private
         * 绘制九宫格位图
         */
        private static drawScale9GridImage(node, scale9Grid, bitmapX, bitmapY, bitmapWidth, bitmapHeight, offsetX, offsetY, textureWidth, textureHeight, destW, destH);
    }
}
declare module egret {
    
    /**
     * @language zh_CN
     * BitmapData 对象是一个包含像素数据的数组。此数据可以表示完全不透明的位图，或表示包含 Alpha 通道数据的透明位图。
     * 以上任一类型的 BitmapData 对象都作为 32 位整数的缓冲区进行存储。每个 32 位整数确定位图中单个像素的属性。<br/>
     * 每个 32 位整数都是四个 8 位通道值（从 0 到 255）的组合，这些值描述像素的 Alpha 透明度以及红色、绿色、蓝色 (ARGB) 值。
     * （对于 ARGB 值，最高有效字节代表 Alpha 通道值，其后的有效字节分别代表红色、绿色和蓝色通道值。）
     * @see egret.Bitmap
     * @version Egret 2.4
     * @platform Web,Native
     */
    interface BitmapData extends HashObject {
        
        /**
         * @language zh_CN
         * 位图图像的宽度，以像素为单位。
         * @readOnly
         * @version Egret 2.4
         * @platform Web,Native
         */
        width: number;
        
        /**
         * @language zh_CN
         * 位图图像的高度，以像素为单位。
         * @readOnly
         * @version Egret 2.4
         * @platform Web,Native
         */
        height: number;
    }
}
declare module egret {
    
    /**
     * @language zh_CN
     * BitmapFillMode 类定义Bitmap的图像填充方式。
     * BitmapFillMode 类定义了调整大小模式的一个枚举，这些模式确定 Bitmap 如何填充由布局系统指定的尺寸。
     * @see http://edn.egret.com/cn/docs/page/134 纹理的填充方式
     * @version Egret 2.4
     * @platform Web,Native
     * @includeExample egret/display/BitmapFillMode.ts
     */
    class BitmapFillMode {
        
        /**
         * @language zh_CN
         * 重复位图以填充区域。
         * @version Egret 2.4
         * @platform Web
         */
        static REPEAT: string;
        
        /**
         * @language zh_CN
         * 位图填充拉伸以填充区域。
         * @version Egret 2.4
         * @platform Web,Native
         */
        static SCALE: string;
        
        /**
         * @language zh_CN
         * 在区域的边缘处截断不显示位图。
         * @version Egret 2.4
         * @platform Web,Native
         */
        static CLIP: string;
    }
}
declare module egret {
    
    /**
     * @language zh_CN
     * 提供混合模式可视效果的常量值的类,通常用于 DisplayObject 的 blendMode 属性上。
     * @see egret.DisplayObject#blendMode
     * @version Egret 2.4
     * @platform Web,Native
     * @includeExample egret/display/BlendMode.ts
     * @see http://edn.egret.com/cn/docs/page/108 显示容器的概念与实现
     */
    class BlendMode {
        
        /**
         * @language zh_CN
         * 该显示对象出现在背景前面。显示对象的像素值会覆盖背景的像素值。在显示对象为透明的区域，背景是可见的。
         * @version Egret 2.4
         * @platform Web,Native
         */
        static NORMAL: string;
        
        /**
         * @language zh_CN
         * 将显示对象的原色值添加到它的背景颜色中，上限值为 0xFF。此设置通常用于使两个对象间的加亮溶解产生动画效果。<br/>
         * 例如，如果显示对象的某个像素的 RGB 值为 0xAAA633，背景像素的 RGB 值为 0xDD2200，则显示像素的结果 RGB 值为 0xFFC833
         * （因为 0xAA + 0xDD > 0xFF，0xA6 + 0x22 = 0xC8，且 0x33 + 0x00 = 0x33）。
         * @version Egret 2.4
         * @platform Web,Native
         */
        static ADD: string;
        
        /**
         * @language zh_CN
         * 根据显示对象的 Alpha 值擦除背景。Alpha 值不为0的区域将被擦除。
         * @version Egret 2.4
         * @platform Web,Native
         */
        static ERASE: string;
    }
}
declare module egret.sys {
    /**
     * @private
     * 转换 blendMode 字符串为数字。
     */
    function blendModeToNumber(blendMode: string): number;
    /**
     * @private
     * 转换数字为 blendMode 字符串。
     */
    function numberToBlendMode(blendMode: number): string;
}
declare module egret {
    
    /**
     * @language zh_CN
     * CapsStyle 类是可指定在绘制线条中使用的端点样式的常量值枚举。常量可用作 egret.Graphics.lineStyle() 方法的 caps 参数中的值。
     * @see egret.Graphics#lineStyle()
     * @version Egret 2.5
     * @platform Web,Native
     */
    class CapsStyle {
        
        /**
         * @language zh_CN
         * 用于在 egret.Graphics.lineStyle() 方法的 caps 参数中指定没有端点。
         * @version Egret 2.5
         * @platform Web,Native
         */
        static NONE: string;
        
        /**
         * @language zh_CN
         * 用于在 egret.Graphics.lineStyle() 方法的 caps 参数中指定圆头端点。
         * @version Egret 2.5
         * @platform Web,Native
         */
        static ROUND: string;
        
        /**
         * @language zh_CN
         * 用于在 egret.Graphics.lineStyle() 方法的 caps 参数中指定方头端点。
         * @version Egret 2.5
         * @platform Web,Native
         */
        static SQUARE: string;
    }
}
declare module egret {
    
    /**
     * @language zh_CN
     * 脏矩形策略常量。
     * @version Egret 2.5
     * @platform Web,Native
     */
    class DirtyRegionPolicy {
        
        /**
         * @language zh_CN
         * 关闭自动脏矩形检测
         * @version Egret 2.5
         * @platform Web,Native
         */
        static OFF: string;
        
        /**
         * @language zh_CN
         * 开启自动脏矩形检测
         * @version Egret 2.5
         * @platform Web,Native
         */
        static ON: string;
    }
}
declare module egret {
    
    /**
     * @language zh_CN
     * DisplayObjectContainer 类是基本显示列表构造块：一个可包含子项的显示列表节点。
     * @version Egret 2.4
     * @platform Web,Native
     * @includeExample egret/display/DisplayObjectContainer.ts
     */
    class DisplayObjectContainer extends DisplayObject {
        /**
         * @private
         */
        static $EVENT_ADD_TO_STAGE_LIST: DisplayObject[];
        /**
         * @private
         */
        static $EVENT_REMOVE_FROM_STAGE_LIST: DisplayObject[];
        
        /**
         * @language zh_CN
         * 实例化一个容器
         * @version Egret 2.4
         * @platform Web,Native
         */
        constructor();
        /**
         * @private
         */
        $propagateFlagsDown(flags: sys.DisplayObjectFlags): void;
        
        /**
         * @language zh_CN
         * 返回此对象的子项数目。
         * @version Egret 2.4
         * @platform Web,Native
         */
        numChildren: number;
        
        /**
         * @language zh_CN
         * 将一个 DisplayObject 子实例添加到该 DisplayObjectContainer 实例中。子项将被添加到该 DisplayObjectContainer 实例中其他
         * 所有子项的前（上）面。（要将某子项添加到特定索引位置，请使用 addChildAt() 方法。）
         * @param child 要作为该 DisplayObjectContainer 实例的子项添加的 DisplayObject 实例。
         * @returns 在 child 参数中传递的 DisplayObject 实例。
         * @see #addChildAt()
         * @version Egret 2.4
         * @platform Web,Native
         */
        addChild(child: DisplayObject): DisplayObject;
        
        /**
         * @language zh_CN
         * 将一个 DisplayObject 子实例添加到该 DisplayObjectContainer 实例中。该子项将被添加到指定的索引位置。索引为 0 表示该
         * DisplayObjectContainer 对象的显示列表的后（底）部。如果添加一个已将其它显示对象容器作为父项的子对象，则会从其它显示对象容器的子列表中删除该对象。
         * @param child 要作为该 DisplayObjectContainer 实例的子项添加的 DisplayObject 实例。
         * @param index 添加该子项的索引位置。 如果指定当前占用的索引位置，则该位置以及所有更高位置上的子对象会在子级列表中上移一个位置。
         * @returns 在 child 参数中传递的 DisplayObject 实例。
         * @see #addChild()
         * @version Egret 2.4
         * @platform Web,Native
         */
        addChildAt(child: DisplayObject, index: number): DisplayObject;
        /**
         * @private
         */
        $doAddChild(child: DisplayObject, index: number, notifyListeners?: boolean): DisplayObject;
        
        /**
         * @language zh_CN
         * 确定指定显示对象是 DisplayObjectContainer 实例的子项还是该实例本身。搜索包括整个显示列表（其中包括此 DisplayObjectContainer 实例）。
         * 孙项、曾孙项等，每项都返回 true。
         * @param child 要测试的子对象。
         * @returns 如果指定的显示对象为 DisplayObjectContainer 该实例本身，则返回true，如果指定的显示对象为当前实例子项，则返回false。
         * @version Egret 2.4
         * @platform Web,Native
         */
        contains(child: DisplayObject): boolean;
        
        /**
         * @language zh_CN
         * 返回位于指定索引处的子显示对象实例。
         * @param index 子对象的索引位置。
         * @returns 位于指定索引位置处的子显示对象。
         * @see #getChildByName()
         * @version Egret 2.4
         * @platform Web,Native
         */
        getChildAt(index: number): DisplayObject;
        
        /**
         * @language zh_CN
         * 返回 DisplayObject 的 child 实例的索引位置。
         * @param child 要测试的子对象。
         * @returns 要查找的子显示对象的索引位置。
         * @version Egret 2.4
         * @platform Web,Native
         */
        getChildIndex(child: egret.DisplayObject): number;
        
        /**
         * @language zh_CN
         * 返回具有指定名称的子显示对象。如果多个子显示对象具有指定名称，则该方法会返回子级列表中的第一个对象。
         * getChildAt() 方法比 getChildByName() 方法快。getChildAt() 方法从缓存数组中访问子项，而 getChildByName() 方法则必须遍历链接的列表来访问子项。
         * @param name 要返回的子项的名称。
         * @returns 具有指定名称的子显示对象。
         * @see #getChildAt()
         * @see egret.DisplayObject#name
         * @version Egret 2.4
         * @platform Web,Native
         */
        getChildByName(name: string): DisplayObject;
        
        /**
         * @language zh_CN
         * 从 DisplayObjectContainer 实例的子列表中删除指定的 child DisplayObject 实例。将已删除子项的 parent 属性设置为 null；
         * 如果不存在对该子项的任何其它引用，则将该对象作为垃圾回收。DisplayObjectContainer 中该子项之上的任何显示对象的索引位置都减去 1。
         * @param child 要删除的 DisplayObject 实例。
         * @returns 在 child 参数中传递的 DisplayObject 实例。
         * @see #removeChildAt()
         * @version Egret 2.4
         * @platform Web,Native
         */
        removeChild(child: DisplayObject): DisplayObject;
        
        /**
         * @language zh_CN
         * 从 DisplayObjectContainer 的子列表中指定的 index 位置删除子 DisplayObject。将已删除子项的 parent 属性设置为 null；
         * 如果没有对该子项的任何其他引用，则将该对象作为垃圾回收。DisplayObjectContainer 中该子项之上的任何显示对象的索引位置都减去 1。
         * @param index 要删除的 DisplayObject 的子索引。
         * @returns 已删除的 DisplayObject 实例。
         * @see #removeChild()
         * @version Egret 2.4
         * @platform Web,Native
         */
        removeChildAt(index: number): DisplayObject;
        /**
         * @private
         */
        $doRemoveChild(index: number, notifyListeners?: boolean): DisplayObject;
        
        /**
         * @language zh_CN
         * 更改现有子项在显示对象容器中的位置。这会影响子对象的分层。
         * @param child 要为其更改索引编号的 DisplayObject 子实例。
         * @param index 生成的 child 显示对象的索引编号。当新的索引编号小于0或大于已有子元件数量时，新加入的DisplayObject对象将会放置于最上层。
         * @see #addChildAt()
         * @see #getChildAt()
         * @version Egret 2.4
         * @platform Web,Native
         */
        setChildIndex(child: DisplayObject, index: number): void;
        /**
         * @private
         */
        private doSetChildIndex(child, index);
        
        /**
         * @language zh_CN
         * 在子级列表中两个指定的索引位置，交换子对象的 Z 轴顺序（前后顺序）。显示对象容器中所有其他子对象的索引位置保持不变。
         * @param index1 第一个子对象的索引位置。
         * @param index2 第二个子对象的索引位置。
         * @see #swapChildren()
         * @version Egret 2.4
         * @platform Web,Native
         */
        swapChildrenAt(index1: number, index2: number): void;
        
        /**
         * @language zh_CN
         * 交换两个指定子对象的 Z 轴顺序（从前到后顺序）。显示对象容器中所有其他子对象的索引位置保持不变。
         * @param child1 第一个子对象。
         * @param child2 第二个子对象。
         * @see #swapChildrenAt()
         * @version Egret 2.4
         * @platform Web,Native
         */
        swapChildren(child1: DisplayObject, child2: DisplayObject): void;
        /**
         * @private
         */
        private doSwapChildrenAt(index1, index2);
        
        /**
         * @language zh_CN
         * 从 DisplayObjectContainer 实例的子级列表中删除所有 child DisplayObject 实例。
         * @see #removeChild()
         * @see #removeChildAt()
         * @version Egret 2.4
         * @platform Web,Native
         */
        removeChildren(): void;
        /**
         * @private
         * 一个子项被添加到容器内，此方法不仅在操作addChild()时会被回调，在操作setChildIndex()或swapChildren时也会回调。
         * 当子项索引发生改变时，会先触发$childRemoved()方法，然后触发$childAdded()方法。
         */
        $childAdded(child: DisplayObject, index: number): void;
        /**
         * @private
         * 一个子项从容器内移除，此方法不仅在操作removeChild()时会被回调，在操作setChildIndex()或swapChildren时也会回调。
         * 当子项索引发生改变时，会先触发$childRemoved()方法，然后触发$childAdded()方法。
         */
        $childRemoved(child: DisplayObject, index: number): void;
        /**
         * @private
         */
        $onAddToStage(stage: Stage, nestLevel: number): void;
        /**
         * @private
         *
         */
        $onRemoveFromStage(): void;
        /**
         * @private
         */
        $measureChildBounds(bounds: Rectangle): void;
        $touchChildren: boolean;
        
        /**
         * @language zh_CN
         * 确定对象的子级是否支持触摸或用户输入设备。如果对象支持触摸或用户输入设备，用户可以通过使用触摸或用户输入设备与之交互。
         * @default true
         * @version Egret 2.4
         * @platform Web,Native
         */
        touchChildren: boolean;
        /**
         * @private
         *
         * @returns
         */
        $getTouchChildren(): boolean;
        /**
         * @private
         */
        $setTouchChildren(value: boolean): boolean;
        /**
         * @private
         * 标记此显示对象需要重绘。此方法会触发自身的cacheAsBitmap重绘。如果只是矩阵改变，自身显示内容并不改变，应该调用$invalidateTransform().
         * @param notiryChildren 是否标记子项也需要重绘。传入false或不传入，将只标记自身需要重绘。通常只有alpha属性改变会需要通知子项重绘。
         */
        $invalidate(notifyChildren?: boolean): void;
        /**
         * @private
         * 标记自身以及所有子项在父级中变换叠加的显示内容失效。此方法不会触发自身的cacheAsBitmap重绘。
         * 通常用于矩阵改变或从显示列表添加和移除时。若自身的显示内容已经改变需要重绘，应该调用$invalidate()。
         */
        $invalidateTransform(): void;
        /**
         * @private
         * 标记所有子项失效,若遇到cacheAsBitmap的节点,直接停止继续遍历其子项.
         */
        private markChildDirty(child, parentCache);
        /**
         * @private
         */
        $cacheAsBitmapChanged(): void;
        /**
         * @private
         */
        private assignParentDisplayList(child, parentCache, newParent);
        /**
         * @private
         */
        $hitTest(stageX: number, stageY: number): DisplayObject;
        /**
         * @private
         * 子项有可能会被cache而导致标记失效。重写此方法,以便在赋值时对子项深度遍历标记脏区域
         */
        $setAlpha(value: number): boolean;
        /**
         * @private
         * 标记所有子项失效,与markChildDirty不同,此方法无视子项是否启用cacheAsBitmap,必须遍历完所有子项.通常只有alpha属性改变需要采用这种操作.
         */
        private $invalidateAllChildren();
    }
}
declare module egret {
    
    /**
     * @language zh_CN
     * GradientType 类为 egret.Graphics 类的 beginGradientFill() 方法中的 type 参数提供值。
     *
     * @see egret.Graphics#beginGradientFill()
     * @version Egret 2.4
     * @platform Web,Native
     */
    class GradientType {
        
        /**
         * @language zh_CN
         * 用于指定线性渐变填充的值
         * @version Egret 2.4
         * @platform Web,Native
         */
        static LINEAR: string;
        
        /**
         * @language zh_CN
         * 用于指定放射状渐变填充的值
         * @version Egret 2.4
         * @platform Web,Native
         */
        static RADIAL: string;
    }
}
declare module egret {
    
    /**
     * @language zh_CN
     * Graphics 类包含一组可用来创建矢量形状的方法。支持绘制的显示对象包括 Sprite 和 Shape 对象。这些类中的每一个类都包括 graphics 属性，该属性是一个 Graphics 对象。
     * 以下是为便于使用而提供的一些辅助函数：drawRect()、drawRoundRect()、drawCircle() 和 drawEllipse()。
     * @see http://edn.egret.com/cn/docs/page/136 绘制矩形
     * @version Egret 2.4
     * @platform Web,Native
     * @includeExample egret/display/Graphics.ts
     */
    class Graphics extends HashObject {
        /**
         * @version Egret 2.4
         * @platform Web,Native
         */
        constructor();
        /**
         * @private
         */
        $renderNode: sys.GraphicsNode;
        /**
         * 绑定到的目标显示对象
         */
        private targetDisplay;
        /**
         * @private
         * 设置绑定到的目标显示对象
         */
        $setTarget(target: DisplayObject): void;
        /**
         * 当前移动到的坐标X
         */
        private lastX;
        /**
         * 当前移动到的坐标Y
         */
        private lastY;
        /**
         * 当前正在绘制的填充
         */
        private fillPath;
        /**
         * 当前正在绘制的线条
         */
        private strokePath;
        /**
         * 线条的左上方宽度
         */
        private topLeftStrokeWidth;
        /**
         * 线条的右下方宽度
         */
        private bottomRightStrokeWidth;
        /**
         * 对1像素和3像素特殊处理，向右下角偏移0.5像素，以显示清晰锐利的线条。
         */
        private setStrokeWidth(width);
        
        /**
         * @language zh_CN
         * 指定一种简单的单一颜色填充，在绘制时该填充将在随后对其他 Graphics 方法（如 lineTo() 或 drawCircle()）的调用中使用。
         * 调用 clear() 方法会清除填充。
         * @param color 填充的颜色
         * @param alpha 填充的 Alpha 值
         * @version Egret 2.4
         * @platform Web,Native
         */
        beginFill(color: number, alpha?: number): void;
        
        /**
         * @language zh_CN
         * 指定一种简单的单一颜色填充，在绘制时该填充将在随后对其他 Graphics 方法（如 lineTo() 或 drawCircle()）的调用中使用。
         * 调用 clear() 方法会清除填充。
         * 注：该方法目前仅支持H5 Canvas
         * @param type 用于指定要使用哪种渐变类型的 GradientType 类的值：GradientType.LINEAR 或 GradientType.RADIAL。
         * @param colors 渐变中使用的 RGB 十六进制颜色值的数组（例如，红色为 0xFF0000，蓝色为 0x0000FF，等等）。对于每种颜色，请在 alphas 和 ratios 参数中指定对应值。
         * @param alphas colors 数组中对应颜色的 alpha 值数组。
         * @param ratios 颜色分布比率的数组。有效值为 0 到 255。
         * @param matrix 一个由 egret.Matrix 类定义的转换矩阵。egret.Matrix 类包括 createGradientBox() 方法，通过该方法可以方便地设置矩阵，以便与 beginGradientFill() 方法一起使用
         * @platform Web
         * @version Egret 2.4
         */
        beginGradientFill(type: string, colors: number[], alphas: number[], ratios: number[], matrix?: egret.Matrix): void;
        
        /**
         * @language zh_CN
         * 对从上一次调用 beginFill()方法之后添加的直线和曲线应用填充。
         * @version Egret 2.4
         * @platform Web,Native
         */
        endFill(): void;
        
        /**
         * @language zh_CN
         * 指定一种线条样式以用于随后对 lineTo() 或 drawCircle() 等 Graphics 方法的调用。
         * @param thickness 一个整数，以点为单位表示线条的粗细，有效值为 0 到 255。如果未指定数字，或者未定义该参数，则不绘制线条。如果传递的值小于 0，则默认值为 0。值 0 表示极细的粗细；最大粗细为 255。如果传递的值大于 255，则默认值为 255。
         * @param color 线条的十六进制颜色值（例如，红色为 0xFF0000，蓝色为 0x0000FF 等）。如果未指明值，则默认值为 0x000000（黑色）。可选。
         * @param alpha 表示线条颜色的 Alpha 值的数字；有效值为 0 到 1。如果未指明值，则默认值为 1（纯色）。如果值小于 0，则默认值为 0。如果值大于 1，则默认值为 1。
         * @param pixelHinting 布尔型值，指定是否提示笔触采用完整像素。它同时影响曲线锚点的位置以及线条笔触大小本身。在 pixelHinting 设置为 true 的情况下，线条宽度会调整到完整像素宽度。在 pixelHinting 设置为 false 的情况下，对于曲线和直线可能会出现脱节。
         * @param scaleMode 用于指定要使用的比例模式
         * @param caps 用于指定线条末端处端点类型的 CapsStyle 类的值。默认值：CapsStyle.ROUND
         * @param joints 指定用于拐角的连接外观的类型。默认值：JointStyle.ROUND
         * @param miterLimit 用于表示剪切斜接的极限值的数字。
         * @version Egret 2.4
         * @platform Web,Native
         */
        lineStyle(thickness?: number, color?: number, alpha?: number, pixelHinting?: boolean, scaleMode?: string, caps?: string, joints?: string, miterLimit?: number): void;
        
        /**
         * @language zh_CN
         * 绘制一个矩形
         * @param x 圆心相对于父显示对象注册点的 x 位置（以像素为单位）。
         * @param y 相对于父显示对象注册点的圆心的 y 位置（以像素为单位）。
         * @param width 矩形的宽度（以像素为单位）。
         * @param height 矩形的高度（以像素为单位）。
         * @version Egret 2.4
         * @platform Web,Native
         */
        drawRect(x: number, y: number, width: number, height: number): void;
        
        /**
         * @language zh_CN
         * 绘制一个圆角矩形。
         * @param x 圆心相对于父显示对象注册点的 x 位置（以像素为单位）。
         * @param y 相对于父显示对象注册点的圆心的 y 位置（以像素为单位）。
         * @param width 矩形的宽度（以像素为单位）。
         * @param height 矩形的高度（以像素为单位）。
         * @param ellipseWidth 用于绘制圆角的椭圆的宽度（以像素为单位）。
         * @param ellipseHeight 用于绘制圆角的椭圆的高度（以像素为单位）。 （可选）如果未指定值，则默认值与为 ellipseWidth 参数提供的值相匹配。
         * @version Egret 2.4
         * @platform Web,Native
         */
        drawRoundRect(x: number, y: number, width: number, height: number, ellipseWidth: number, ellipseHeight?: number): void;
        
        /**
         * @language zh_CN
         * 绘制一个圆。
         * @param x 圆心相对于父显示对象注册点的 x 位置（以像素为单位）。
         * @param y 相对于父显示对象注册点的圆心的 y 位置（以像素为单位）。
         * @param radius 圆的半径（以像素为单位）。
         * @version Egret 2.4
         * @platform Web,Native
         */
        drawCircle(x: number, y: number, radius: number): void;
        
        /**
         * @language zh_CN
         * 绘制一个椭圆。
         * @param x 一个表示相对于父显示对象注册点的水平位置的数字（以像素为单位）。
         * @param y 一个表示相对于父显示对象注册点的垂直位置的数字（以像素为单位）。
         * @param width 矩形的宽度（以像素为单位）。
         * @param height 矩形的高度（以像素为单位）。
         * @version Egret 2.4
         * @platform Web,Native
         */
        drawEllipse(x: number, y: number, width: number, height: number): void;
        
        /**
         * @language zh_CN
         * 将当前绘图位置移动到 (x, y)。如果缺少任何一个参数，则此方法将失败，并且当前绘图位置不改变。
         * @param x 一个表示相对于父显示对象注册点的水平位置的数字（以像素为单位）。
         * @param y 一个表示相对于父显示对象注册点的垂直位置的数字（以像素为单位）。
         * @version Egret 2.4
         * @platform Web,Native
         */
        moveTo(x: number, y: number): void;
        
        /**
         * @language zh_CN
         * 使用当前线条样式绘制一条从当前绘图位置开始到 (x, y) 结束的直线；当前绘图位置随后会设置为 (x, y)。
         * @param x 一个表示相对于父显示对象注册点的水平位置的数字（以像素为单位）。
         * @param y 一个表示相对于父显示对象注册点的垂直位置的数字（以像素为单位）。
         * @version Egret 2.4
         * @platform Web,Native
         */
        lineTo(x: number, y: number): void;
        
        /**
         * @language zh_CN
         * 使用当前线条样式和由 (controlX, controlY) 指定的控制点绘制一条从当前绘图位置开始到 (anchorX, anchorY) 结束的二次贝塞尔曲线。当前绘图位置随后设置为 (anchorX, anchorY)。
         * 如果在调用 moveTo() 方法之前调用了 curveTo() 方法，则当前绘图位置的默认值为 (0, 0)。如果缺少任何一个参数，则此方法将失败，并且当前绘图位置不改变。
         * 绘制的曲线是二次贝塞尔曲线。二次贝塞尔曲线包含两个锚点和一个控制点。该曲线内插这两个锚点，并向控制点弯曲。
         * @param controlX 一个数字，指定控制点相对于父显示对象注册点的水平位置。
         * @param controlY 一个数字，指定控制点相对于父显示对象注册点的垂直位置。
         * @param anchorX 一个数字，指定下一个锚点相对于父显示对象注册点的水平位置。
         * @param anchorY 一个数字，指定下一个锚点相对于父显示对象注册点的垂直位置。
         * @version Egret 2.4
         * @platform Web,Native
         */
        curveTo(controlX: number, controlY: number, anchorX: number, anchorY: number): void;
        
        /**
         * @language zh_CN
         * 从当前绘图位置到指定的锚点绘制一条三次贝塞尔曲线。三次贝塞尔曲线由两个锚点和两个控制点组成。该曲线内插这两个锚点，并向两个控制点弯曲。
         * @param controlX1 指定首个控制点相对于父显示对象的注册点的水平位置。
         * @param controlY1 指定首个控制点相对于父显示对象的注册点的垂直位置。
         * @param controlX2 指定第二个控制点相对于父显示对象的注册点的水平位置。
         * @param controlY2 指定第二个控制点相对于父显示对象的注册点的垂直位置。
         * @param anchorX 指定锚点相对于父显示对象的注册点的水平位置。
         * @param anchorY 指定锚点相对于父显示对象的注册点的垂直位置。
         * @version Egret 2.4
         * @platform Web,Native
         */
        cubicCurveTo(controlX1: number, controlY1: number, controlX2: number, controlY2: number, anchorX: number, anchorY: number): void;
        
        /**
         * @language zh_CN
         * 绘制一段圆弧路径。圆弧路径的圆心在 (x, y) 位置，半径为 r ，根据anticlockwise （默认为顺时针）指定的方向从 startAngle 开始绘制，到 endAngle 结束。
         * @param x 圆弧中心（圆心）的 x 轴坐标。
         * @param y 圆弧中心（圆心）的 y 轴坐标。
         * @param radius 圆弧的半径。
         * @param startAngle 圆弧的起始点， x轴方向开始计算，单位以弧度表示。
         * @param endAngle 圆弧的终点， 单位以弧度表示。
         * @param anticlockwise 如果为 true，逆时针绘制圆弧，反之，顺时针绘制。
         * @version Egret 2.4
         * @platform Web,Native
         */
        drawArc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void;
        /**
         * @private
         * 测量圆弧的矩形大小
         */
        private arcBounds(x, y, radius, startAngle, endAngle);
        
        /**
         * @language zh_CN
         * 清除绘制到此 Graphics 对象的图形，并重置填充和线条样式设置。
         * @version Egret 2.4
         * @platform Web,Native
         */
        clear(): void;
        /**
         * @private
         */
        private minX;
        /**
         * @private
         */
        private minY;
        /**
         * @private
         */
        private maxX;
        /**
         * @private
         */
        private maxY;
        /**
         * @private
         */
        private extendBoundsByPoint(x, y);
        /**
         * @private
         */
        private extendBoundsByX(x);
        /**
         * @private
         */
        private extendBoundsByY(y);
        /**
         * @private
         */
        private updateNodeBounds();
        /**
         * 是否已经包含上一次moveTo的坐标点
         */
        private includeLastPosition;
        /**
         * 更新当前的lineX和lineY值，并标记尺寸失效。
         * @private
         */
        private updatePosition(x, y);
        /**
         * @private
         */
        $measureContentBounds(bounds: Rectangle): void;
        /**
         * @private
         *
         */
        $hitTest(stageX: number, stageY: number): DisplayObject;
    }
}
declare module egret {
    
    /**
     * @language zh_CN
     * JointStyle 类是指定要在绘制线条中使用的联接点样式的常量值枚举。提供的这些常量用作 egret.Graphics.lineStyle() 方法的 joints 参数中的值。
     * @see egret.Graphics#lineStyle()
     * @version Egret 2.5
     * @platform Web,Native
     */
    class JointStyle {
        
        /**
         * @language zh_CN
         * 在 egret.Graphics.lineStyle() 方法的 joints 参数中指定斜角连接。
         * @version Egret 2.5
         * @platform Web,Native
         */
        static BEVEL: string;
        
        /**
         * @language zh_CN
         * 在 egret.Graphics.lineStyle() 方法的 joints 参数中指定尖角连接。
         * @version Egret 2.5
         * @platform Web,Native
         */
        static MITER: string;
        
        /**
         * @language zh_CN
         * 在 egret.Graphics.lineStyle() 方法的 joints 参数中指定圆角连接。
         * @version Egret 2.5
         * @platform Web,Native
         */
        static ROUND: string;
    }
}
declare module egret {
    /**
     * @private
     */
    class Mesh extends Bitmap {
        constructor(value?: BitmapData | Texture);
        /**
         * @private
         */
        $render(): void;
        /**
         * @private
         */
        private _verticesDirty;
        private _bounds;
        /**
         * @private
         */
        $updateVertices(): void;
        /**
         * @private
         */
        $measureContentBounds(bounds: Rectangle): void;
    }
}
declare module egret {
    /**
     * OrientationMode 类为舞台初始旋转模式提供值。
     */
    class OrientationMode {
        /**
         * 适配屏幕
         */
        static AUTO: string;
        /**
         * 默认竖屏
         */
        static PORTRAIT: string;
        /**
         * 默认横屏，舞台顺时针旋转90度
         */
        static LANDSCAPE: string;
        /**
         * 默认横屏，舞台逆时针旋转90度
         */
        static LANDSCAPE_FLIPPED: string;
    }
}
declare module egret {
    var $TextureScaleFactor: number;
    
    /**
     * @language zh_CN
     * 纹理类是对不同平台不同的图片资源的封装
     * 在HTML5中，资源是一个HTMLElement对象
     * 在OpenGL / WebGL中，资源是一个提交GPU后获取的纹理id
     * Texture类封装了这些底层实现的细节，开发者只需要关心接口即可
     * @see http://edn.egret.com/cn/docs/page/135 纹理集的使用
     * @see http://edn.egret.com/cn/docs/page/123 获取资源的几种方式
     * @version Egret 2.4
     * @platform Web,Native
     * @includeExample egret/display/Texture.ts
     */
    class Texture extends HashObject {
        
        /**
         * @language zh_CN
         * 创建一个 egret.Texture 对象
         * @version Egret 2.4
         * @platform Web,Native
         */
        constructor();
        /**
         * @private
         * 表示这个纹理在 bitmapData 上的 x 起始位置
         */
        _bitmapX: number;
        /**
         * @private
         * 表示这个纹理在 bitmapData 上的 y 起始位置
         */
        _bitmapY: number;
        /**
         * @private
         * 表示这个纹理在 bitmapData 上的宽度
         */
        _bitmapWidth: number;
        /**
         * @private
         * 表示这个纹理在 bitmapData 上的高度
         */
        _bitmapHeight: number;
        /**
         * @private
         * 表示这个纹理显示了之后在 x 方向的渲染偏移量
         */
        _offsetX: number;
        /**
         * @private
         * 表示这个纹理显示了之后在 y 方向的渲染偏移量
         */
        _offsetY: number;
        /**
         * @private
         * 纹理宽度
         */
        private _textureWidth;
        
        /**
         * @language zh_CN
         * 纹理宽度，只读属性，不可以设置
         * @version Egret 2.4
         * @platform Web,Native
         */
        textureWidth: number;
        $getTextureWidth(): number;
        /**
         * @private
         * 纹理高度
         */
        private _textureHeight;
        
        /**
         * @language zh_CN
         * 纹理高度，只读属性，不可以设置
         * @version Egret 2.4
         * @platform Web,Native
         */
        textureHeight: number;
        $getTextureHeight(): number;
        $getScaleBitmapWidth(): number;
        $getScaleBitmapHeight(): number;
        /**
         * @private
         * 表示bitmapData.width
         */
        _sourceWidth: number;
        /**
         * @private
         * 表示bitmapData.height
         */
        _sourceHeight: number;
        /**
         * @private
         */
        _bitmapData: any;
        
        /**
         * @language zh_CN
         * 被引用的 BitmapData 对象。
         * @version Egret 2.4
         * @platform Web,Native
         */
        bitmapData: BitmapData;
        /**
         * @private
         *
         * @param value
         */
        _setBitmapData(value: any): void;
        /**
         * @private
         * 设置Texture数据
         * @param bitmapX
         * @param bitmapY
         * @param bitmapWidth
         * @param bitmapHeight
         * @param offsetX
         * @param offsetY
         * @param textureWidth
         * @param textureHeight
         * @param sourceWidth
         * @param sourceHeight
         */
        $initData(bitmapX: number, bitmapY: number, bitmapWidth: number, bitmapHeight: number, offsetX: number, offsetY: number, textureWidth: number, textureHeight: number, sourceWidth: number, sourceHeight: number): void;
        
        /**
         * @language zh_CN
         * 获取某一点像素的颜色值
         * @param x {number} 像素点的X轴坐标
         * @param y {number} 像素点的Y轴坐标
         * @returns {number} 指定像素点的颜色值
         * @version Egret 2.4
         * @platform Web
         */
        getPixel32(x: number, y: number): number[];
        
        /**
         * @language zh_CN
         * 转换成base64字符串，如果图片（或者包含的图片）跨域，则返回null
         * @param type 转换的类型，如  "image/png"
         * @param rect 需要转换的区域
         * @returns {any} base64字符串
         * @version Egret 2.4
         */
        toDataURL(type: string, rect?: egret.Rectangle): string;
        
        /**
         * @language zh_CN
         * 裁剪指定区域并保存成图片。
         * native只支持 "image/png" 和 "image/jpeg"；Web中由于各个浏览器的实现不一样，因此建议也只用这2种。
         * @param type 转换的类型，如  "image/png"
         * @param filePath 图片的名称的路径（主目录为游戏的私有空间，路径中不能有 "../"，Web只支持传名称。）
         * @param rect 需要转换的区域
         * @version Egret 2.4
         * @platform Native
         */
        saveToFile(type: string, filePath: string, rect?: egret.Rectangle): void;
        
        /**
         * @language zh_CN
         * 释放纹理
         * @version Egret 2.4
         * @platform Web,Native
         */
        dispose(): void;
        private static _displayList;
        static $addDisplayObject(displayObject: DisplayObject, bitmapData: BitmapData | Texture): void;
        static $removeDisplayObject(displayObject: DisplayObject, bitmapData: BitmapData | Texture): void;
        static $invalidate(bitmapData: BitmapData | Texture): void;
        static $dispose(bitmapData: BitmapData | Texture): void;
    }
}
declare module egret {
    
    /**
     * @language zh_CN
     * RenderTexture 是动态纹理类，他实现了将显示对象及其子对象绘制成为一个纹理的功能
     * @extends egret.Texture
     * @version Egret 2.4
     * @platform Web,Native
     * @includeExample egret/display/RenderTexture.ts
     */
    class RenderTexture extends egret.Texture {
        constructor();
        private renderBuffer;
        
        /**
         * @language zh_CN
         * 将指定显示对象绘制为一个纹理
         * @param displayObject {egret.DisplayObject} 需要绘制的显示对象
         * @param clipBounds {egret.Rectangle} 绘制矩形区域
         * @param scale {number} 缩放比例
         * @version Egret 2.4
         * @platform Web,Native
         */
        drawToTexture(displayObject: egret.DisplayObject, clipBounds?: Rectangle, scale?: number): boolean;
        getPixel32(x: number, y: number): number[];
        dispose(): void;
    }
}
declare module egret {
    
    /**
     * @language zh_CN
     * 此类用于使用绘图应用程序编程接口 (API) 创建简单形状。Shape 类含有 graphics 属性，通过该属性您可以访问各种矢量绘图方法。
     * @see egret.Graphics
     * @version Egret 2.4
     * @platform Web,Native
     * @includeExample egret/display/Shape.ts
     */
    class Shape extends DisplayObject {
        
        /**
         * @language zh_CN
         * 创建一个 Shape 对象
         * @version Egret 2.4
         * @platform Web,Native
         */
        constructor();
        /**
         * @private
         */
        $graphics: Graphics;
        
        /**
         * @language zh_CN
         * 获取 Shape 中的 Graphics 对象。可通过此对象执行矢量绘图命令。
         * @version Egret 2.4
         * @platform Web,Native
         */
        graphics: Graphics;
        /**
         * @private
         */
        $measureContentBounds(bounds: Rectangle): void;
        $hitTest(stageX: number, stageY: number): DisplayObject;
    }
}
declare module egret {
    
    /**
     * @language zh_CN
     * Sprite 类是基本显示列表构造块：一个可包含子项的显示列表节点。
     * @version Egret 2.4
     * @platform Web,Native
     * @includeExample egret/display/Sprite.ts
     */
    class Sprite extends DisplayObjectContainer {
        
        /**
         * @language zh_CN
         * 实例化一个容器
         * @version Egret 2.4
         * @platform Web,Native
         */
        constructor();
        /**
         * @private
         */
        $graphics: Graphics;
        
        /**
         * @language zh_CN
         * 获取 Shape 中的 Graphics 对象。可通过此对象执行矢量绘图命令。
         * @version Egret 2.4
         * @platform Web,Native
         */
        graphics: Graphics;
        $hitTest(stageX: number, stageY: number): DisplayObject;
        /**
         * @private
         */
        $measureContentBounds(bounds: Rectangle): void;
    }
}
declare module egret {
    
    /**
     * @language zh_CN
     * SpriteSheet 是一张由多个子位图拼接而成的集合位图，它包含多个 Texture 对象。
     * 每一个 Texture 都共享 SpriteSheet 的集合位图，但是指向它的不同的区域。
     * 在WebGL / OpenGL上，这种做法可以显著提升性能
     * 同时，SpriteSheet可以很方便的进行素材整合，降低HTTP请求数量
     * SpriteSheet 格式的具体规范可以参见此文档  https://github.com/egret-labs/egret-core/wiki/Egret-SpriteSheet-Specification
     * @see http://edn.egret.com/cn/docs/page/135 纹理集的使用
     * @version Egret 2.4
     * @platform Web,Native
     * @includeExample egret/display/SpriteSheet.ts
     */
    class SpriteSheet extends HashObject {
        
        /**
         * @language zh_CN
         * 创建一个 egret.SpriteSheet 对象
         * @param texture {Texture} 纹理
         * @version Egret 2.4
         * @platform Web,Native
         */
        constructor(texture: Texture);
        /**
         * @private
         * 表示这个SpriteSheet的位图区域在bitmapData上的起始位置x。
         */
        private _bitmapX;
        /**
         * @private
         * 表示这个SpriteSheet的位图区域在bitmapData上的起始位置y。
         */
        private _bitmapY;
        /**
         * @private
         * 共享的位图数据
         */
        $texture: Texture;
        /**
         * @private
         * 纹理缓存字典
         */
        _textureMap: Object;
        
        /**
         * @language zh_CN
         * 根据指定纹理名称获取一个缓存的 Texture 对象
         * @param name {string} 缓存这个 Texture 对象所使用的名称
         * @returns {egret.Texture} Texture 对象
         * @version Egret 2.4
         * @platform Web,Native
         */
        getTexture(name: string): Texture;
        
        /**
         * @language zh_CN
         * 为 SpriteSheet 上的指定区域创建一个新的 Texture 对象并缓存它
         * @param name {string} 缓存这个 Texture 对象所使用的名称，如果名称已存在，将会覆盖之前的 Texture 对象
         * @param bitmapX {number} 纹理区域在 bitmapData 上的起始坐标x
         * @param bitmapY {number} 纹理区域在 bitmapData 上的起始坐标y
         * @param bitmapWidth {number} 纹理区域在 bitmapData 上的宽度
         * @param bitmapHeight {number} 纹理区域在 bitmapData 上的高度
         * @param offsetX {number} 原始位图的非透明区域 x 起始点
         * @param offsetY {number} 原始位图的非透明区域 y 起始点
         * @param textureWidth {number} 原始位图的高度，若不传入，则使用 bitmapWidth 的值。
         * @param textureHeight {number} 原始位图的宽度，若不传入，则使用 bitmapHeight 的值。
         * @returns {egret.Texture} 创建的 Texture 对象
         * @version Egret 2.4
         * @platform Web,Native
         */
        createTexture(name: string, bitmapX: number, bitmapY: number, bitmapWidth: number, bitmapHeight: number, offsetX?: number, offsetY?: number, textureWidth?: number, textureHeight?: number): Texture;
        
        /**
         * @language zh_CN
         * 释放纹理
         * @version Egret 2.4
         * @platform Web,Native
         */
        dispose(): void;
    }
}
declare module egret {
    
    /**
     * @language zh_CN
     * Stage 类代表主绘图区。
     * 可以利用 DisplayObject 实例的 stage 属性进行访问。<br/>
     * Stage 类具有多个祖代类: Sprite、DisplayObject 和 EventDispatcher，属性和方法便是从这些类继承而来的。
     * 从这些继承的许多属性和方法不适用于 Stage 对象。
     * @event egret.Event.RESIZE 当stageWidth或stageHeight属性发生改变时调度
     * @event egret.Event.DEACTIVATE 当stage失去焦点后调度
     * @event egret.Event.ACTIVATE 当stage获得焦点后调度
     *
     * @version Egret 2.4
     * @platform Web,Native
     * @includeExample egret/display/Stage.ts
     */
    class Stage extends DisplayObjectContainer {
        /**
         * @private
         * Stage不许允许自行实例化
         * @version Egret 2.4
         * @platform Web,Native
         */
        constructor();
        
        /**
         * @language zh_CN
         * 获取并设置舞台的帧速率。帧速率是指每秒显示的帧数。帧速率的有效范围为每秒 0.01 到 60 个帧。<br/>
         * 注意: 修改任何一个Stage的frameRate属性都会同步修改其他Stage的帧率。
         * @default 30
         * @version Egret 2.4
         * @platform Web,Native
         */
        frameRate: number;
        /**
         * @private
         */
        $stageWidth: number;
        
        /**
         * @language zh_CN
         * 舞台的当前宽度（以像素为单位）。
         * @version Egret 2.4
         * @platform Web,Native
         */
        stageWidth: number;
        /**
         * @private
         */
        $stageHeight: number;
        
        /**
         * @language zh_CN
         * 舞台的当前高度（以像素为单位）。
         * @version Egret 2.4
         * @platform Web,Native
         */
        stageHeight: number;
        
        /**
         * @language zh_CN
         * 调用 invalidate() 方法后，在显示列表下次呈现时，Egret 会向每个已注册侦听 Event.RENDER 事件的显示对象发送一个 Event.RENDER 事件。
         * 每次您希望 Egret 发送 Event.RENDER 事件时，都必须调用 invalidate() 方法。
         * @version Egret 2.4
         * @platform Web,Native
         */
        invalidate(): void;
        /**
         * @private
         */
        private implMap;
        
        /**
         * @language zh_CN
         * 注册一个接口实现。
         * @param interfaceName 注入的接口名称。例如："eui.IAssetAdapter","eui.Theme"
         * @param instance 实现此接口的实例。
         * @version Egret 2.4
         * @platform Web,Native
         */
        registerImplementation(interfaceName: string, instance: any): void;
        
        /**
         * @language zh_CN
         * 获取一个接口实现。此方法通常由框架内部调用。获取项目注入的自定义实现实例。
         * @param interfaceName 要获取的接口名称。例如："eui.IAssetAdapter","eui.Theme"
         * @returns 返回实现此接口的实例。
         * @version Egret 2.4
         * @platform Web,Native
         */
        getImplementation(interfaceName: string): any;
        /**
         * @private
         * 设备屏幕引用
         */
        $screen: egret.sys.Screen;
        $scaleMode: string;
        
        /**
         * @language zh_CN
         * 一个 StageScaleMode 类中指定要使用哪种缩放模式的值。以下是有效值：<br/>
         * <ul>
         * <li>StageScaleMode.EXACT_FIT -- 整个应用程序在指定区域中可见，但不尝试保持原始高宽比。可能会发生扭曲，应用程序可能会拉伸或压缩显示。</li>
         * <li>StageScaleMode.SHOW_ALL -- 整个应用程序在指定区域中可见，且不发生扭曲，同时保持应用程序的原始高宽比。应用程序的可能会显示边框。</li>
         * <li>StageScaleMode.NO_SCALE -- 整个应用程序的大小固定，因此，即使播放器窗口的大小更改，它也会保持不变。如果播放器窗口比内容小，则可能进行一些裁切。</li>
         * <li>StageScaleMode.NO_BORDER -- 保持原始宽高比缩放应用程序内容，缩放后应用程序内容的较窄方向填满播放器视口，另一个方向的两侧可能会超出播放器视口而被裁切。</li>
         * <li>StageScaleMode.FIXED_WIDTH -- 保持原始宽高比缩放应用程序内容，缩放后应用程序内容在水平和垂直方向都填满播放器视口，但只保持应用程序内容的原始宽度不变，高度可能会改变。</li>
         * <li>StageScaleMode.FIXED_HEIGHT -- 保持原始宽高比缩放应用程序内容，缩放后应用程序内容在水平和垂直方向都填满播放器视口，但只保持应用程序内容的原始高度不变，宽度可能会改变。</li>
         * </ul>
         * @default egret.StageScaleMode.SHOW_ALL
         */
        scaleMode: string;
        $orientation: string;
        
        /**
         * @language zh_CN
         * 屏幕横竖屏显示方式，目前 Native 下只能在配置文件里设置。一个 egret.OrientationMode 类中指定要使用哪种显示方式。以下是有效值：<br/>
         * <ul>
         * <li>egret.OrientationMode.AUTO -- 应用始终跟随屏幕的方向显示，始终保证由上往下看。</li>
         * <li>egret.OrientationMode.PORTRAIT -- 应用始终保持竖屏模式，即横屏看时，屏幕由左往右看。</li>
         * <li>egret.OrientationMode.LANDSCAPE -- 应用始终保持横屏模式，即竖屏看时，屏幕显示由右往左。</li>
         * <li>egret.OrientationMode.LANDSCAPE_FLIPPED -- 应用始终保持横屏模式，即竖屏看时，屏幕显示由左往右。</li>
         * </ul>
         * @platform Web
         * @version 2.4
         */
        orientation: string;
        
        /**
         * @language zh_CN
         * 绘制纹理的缩放比率，默认值为1
         * @default 1
         */
        textureScaleFactor: number;
        $maxTouches: number;
        
        /**
         * @language zh_CN
         * 设置屏幕同时可以触摸的数量。高于这个数量将不会被触发响应。
         * @default 99
         */
        maxTouches: number;
        private $dirtyRegionPolicy;
        
        /**
         * @language zh_CN
         * 设置脏矩形策略
         * egret.DirtyRegionPolicy 定义的常量之一
         * @version Egret 2.5.5
         * @platform Web,Native
         */
        dirtyRegionPolicy: string;
        
        /**
         * @language zh_CN
         * 设置分辨率尺寸
         * @param width 宽度
         * @param height 高度
         * @version Egret 2.5.5
         * @platform Web,Native
         */
        setContentSize(width: number, height: number): void;
    }
}
declare module egret {
    
    /**
     * @language zh_CN
     * Event 类作为创建事件实例的基类，当发生事件时，Event 实例将作为参数传递给事件侦听器。Event 类的属性包含有关事件的基本信息，例如事件
     * 的类型或者是否可以取消事件的默认行为。对于许多事件（如由 Event 类常量表示的事件），此基本信息就足够了。但其他事件可能需要更详细的信息。
     * 例如，与触摸关联的事件需要包括有关触摸事件的位置信息。您可以通过扩展 Event 类（TouchEvent 类执行的操作）将此类其他信息传递给事件侦听器。
     * Egret API 为需要其他信息的常见事件定义多个 Event 子类。与每个 Event 子类关联的事件将在每个类的文档中加以介绍。Event 类的方法可以在
     * 事件侦听器函数中使用以影响事件对象的行为。某些事件有关联的默认行为，通过调用 preventDefault() 方法，您的事件侦听器可以取消此行为。
     * 可以通过调用 stopPropagation() 或 stopImmediatePropagation() 方法，将当前事件侦听器作为处理事件的最后一个事件侦听器。
     * @see egret.EventDispatcher
     * @version Egret 2.4
     * @platform Web,Native
     * @includeExample egret/events/Event.ts
     * @see http://edn.egret.com/cn/docs/page/798 取消触摸事件
     */
    class Event extends HashObject {
        
        /**
         * @language zh_CN
         * 在将显示对象直接添加到舞台显示列表或将包含显示对象的子树添加至舞台显示列表中时调度。
         * @version Egret 2.4
         * @platform Web,Native
         */
        static ADDED_TO_STAGE: string;
        
        /**
         * @language zh_CN
         * 在从显示列表中直接删除显示对象或删除包含显示对象的子树时调度。
         * @version Egret 2.4
         * @platform Web,Native
         */
        static REMOVED_FROM_STAGE: string;
        
        /**
         * @language zh_CN
         * 将显示对象添加到显示列表中时调度。
         * @version Egret 2.4
         * @platform Web,Native
         */
        static ADDED: string;
        
        /**
         * @language zh_CN
         * 将要从显示列表中删除显示对象时调度。
         * @version Egret 2.4
         * @platform Web,Native
         */
        static REMOVED: string;
        
        /**
         * @language zh_CN
         * [广播事件] 进入新的一帧,监听此事件将会在下一帧开始时触发一次回调。这是一个广播事件，可以在任何一个显示对象上监听，无论它是否在显示列表中。
         * @version Egret 2.4
         * @platform Web,Native
         */
        static ENTER_FRAME: string;
        
        /**
         * @language zh_CN
         * 渲染事件，监听此事件将会在本帧末即将开始渲染的前一刻触发回调，这是一个广播事件，可以在任何一个显示对象上监听，无论它是否在显示列表中。
         * 注意：每次您希望 Egret 发送 Event.RENDER 事件时，都必须调用 stage.invalidate() 方法，由于每帧只会触发一次屏幕刷新，
         * 若在 Event.RENDER 回调函数执行期间再次调用stage.invalidate()，将会被忽略。
         * @version Egret 2.4
         * @platform Web,Native
         */
        static RENDER: string;
        
        /**
         * @language zh_CN
         * 舞台尺寸或UI组件尺寸发生改变
         * @version Egret 2.4
         * @platform Web,Native
         */
        static RESIZE: string;
        
        /**
         * @language zh_CN
         * 属性值或状态发生改变。通常是按钮的选中状态，或者列表的选中项索引改变。
         * @version Egret 2.4
         * @platform Web,Native
         */
        static CHANGE: string;
        
        /**
         * @language zh_CN
         * 属性值或状态即将发生改变,通常是按钮的选中状态，或者列表的选中项索引改变。可以通过调用 preventDefault() 方法阻止索引发生更改。
         * @version Egret 2.4
         * @platform Web,Native
         */
        static CHANGING: string;
        
        /**
         * @language zh_CN
         * 网络请求加载完成
         * @version Egret 2.4
         * @platform Web,Native
         */
        static COMPLETE: string;
        
        /**
         * @language zh_CN
         * 循环完成
         * @version Egret 2.4
         * @platform Web,Native
         */
        static LOOP_COMPLETE: string;
        
        /**
         * @language zh_CN
         * TextInput实例获得焦点
         * @version Egret 2.4
         * @platform Web,Native
         */
        static FOCUS_IN: string;
        
        /**
         * @language zh_CN
         * TextInput实例失去焦点
         * @version Egret 2.4
         * @platform Web,Native
         */
        static FOCUS_OUT: string;
        
        /**
         * @language zh_CN
         * 动画声音等播放完成
         * @version Egret 2.4
         * @platform Web,Native
         */
        static ENDED: string;
        /**
         * 游戏激活
         * @version Egret 2.4
         * @platform Web,Native
         */
        static ACTIVATE: string;
        /**
         * 取消激活
         * @version Egret 2.4
         * @platform Web,Native
         */
        static DEACTIVATE: string;
        /**
         * Event.CLOSE 常量定义 close 事件对象的 type 属性的值。
         * @version Egret 2.4
         * @platform Web,Native
         */
        static CLOSE: string;
        /**
         * Event.CONNECT 常量定义 connect 事件对象的 type 属性的值。
         * @version Egret 2.4
         * @platform Web,Native
         */
        static CONNECT: string;
        /**
         * Event.LEAVE_STAGE 常量定义 leaveStage 事件对象的 type 属性的值。
         * @version Egret 2.4
         * @platform Web,Native
         */
        static LEAVE_STAGE: string;
        /**
         * Event.SOUND_COMPLETE 常量定义 在声音完成播放后调度。
         * @version Egret 2.4
         * @platform Web,Native
         */
        static SOUND_COMPLETE: string;
        
        /**
         * @language zh_CN
         * 创建一个作为参数传递给事件侦听器的 Event 对象。
         * @param type  事件的类型，可以作为 Event.type 访问。
         * @param bubbles  确定 Event 对象是否参与事件流的冒泡阶段。默认值为 false。
         * @param cancelable 确定是否可以取消 Event 对象。默认值为 false。
         * @param data 与此事件对象关联的可选数据。
         * @version Egret 2.4
         * @platform Web,Native
         */
        constructor(type: string, bubbles?: boolean, cancelable?: boolean, data?: any);
        
        /**
         * @language zh_CN
         * 与此事件对象关联的可选数据。
         * @version Egret 2.4
         * @platform Web,Native
         */
        data: any;
        /**
         * @private
         */
        $type: string;
        
        /**
         * @language zh_CN
         * 事件的类型。类型区分大小写。
         * @version Egret 2.4
         * @platform Web,Native
         */
        type: string;
        /**
         * @private
         */
        $bubbles: boolean;
        
        /**
         * @language zh_CN
         * 表示事件是否为冒泡事件。如果事件可以冒泡，则此值为 true；否则为 false。
         * @version Egret 2.4
         * @platform Web,Native
         */
        bubbles: boolean;
        /**
         * @private
         */
        $cancelable: boolean;
        
        /**
         * @language zh_CN
         * 表示是否可以阻止与事件相关联的行为。如果可以取消该行为，则此值为 true；否则为 false。
         * @see #preventDefault()
         * @version Egret 2.4
         * @platform Web,Native
         */
        cancelable: boolean;
        /**
         * @private
         */
        $eventPhase: number;
        
        /**
         * @language zh_CN
         * 事件流中的当前阶段。此属性可以包含以下数值：
         * 捕获阶段 (EventPhase.CAPTURING_PHASE)。
         * 目标阶段 (EventPhase.AT_TARGET)。
         * 冒泡阶段 (EventPhase.BUBBLING_PHASE)。
         * @see egret.EventPhase
         * @version Egret 2.4
         * @platform Web,Native
         */
        eventPhase: number;
        /**
         * @private
         */
        $currentTarget: any;
        
        /**
         * @language zh_CN
         * 当前正在使用某个事件侦听器处理 Event 对象的对象。例如，如果用户单击“确定”按钮，
         * 则当前目标可以是包含该按钮的节点，也可以是它的已为该事件注册了事件侦听器的始祖之一。
         * @version Egret 2.4
         * @platform Web,Native
         */
        currentTarget: any;
        /**
         * @private
         */
        $target: any;
        
        /**
         * @language zh_CN
         * 事件目标。此属性包含目标节点。例如，如果用户单击“确定”按钮，则目标节点就是包含该按钮的显示列表节点。
         * @version Egret 2.4
         * @platform Web,Native
         */
        target: any;
        $setTarget(target: any): boolean;
        /**
         * @private
         */
        $isDefaultPrevented: boolean;
        
        /**
         * @language zh_CN
         * 检查是否已对事件调用 preventDefault() 方法。
         * @returns 如果已调用 preventDefault() 方法，则返回 true；否则返回 false。
         * @see #preventDefault()
         * @version Egret 2.4
         * @platform Web,Native
         */
        isDefaultPrevented(): boolean;
        
        /**
         * @language zh_CN
         * 如果可以取消事件的默认行为，则取消该行为。
         * 许多事件都有默认执行的关联行为。例如，如果用户在文本字段中键入一个字符，则默认行为就是在文本字段中显示该字符。
         * 由于可以取消 TextEvent.TEXT_INPUT 事件的默认行为，因此您可以使用 preventDefault() 方法来防止显示该字符。
         * 您可以使用 Event.cancelable 属性来检查是否可以防止与特定事件关联的默认行为。如果 Event.cancelable 的值为 true，
         * 则可以使用 preventDefault() 来取消事件；否则，preventDefault() 无效。
         * @see #cancelable
         * @see #isDefaultPrevented
         * @version Egret 2.4
         * @platform Web,Native
         */
        preventDefault(): void;
        /**
         * @private
         */
        $isPropagationStopped: boolean;
        
        /**
         * @language zh_CN
         * 防止对事件流中当前节点的后续节点中的所有事件侦听器进行处理。此方法不会影响当前节点 currentTarget 中的任何事件侦听器。
         * 相比之下，stopImmediatePropagation() 方法可以防止对当前节点中和后续节点中的事件侦听器进行处理。
         * 对此方法的其它调用没有任何效果。可以在事件流的任何阶段中调用此方法。<br/>
         * 注意：此方法不会取消与此事件相关联的行为；有关此功能的信息，请参阅 preventDefault()。
         * @see #stopImmediatePropagation()
         * @see #preventDefault()
         * @version Egret 2.4
         * @platform Web,Native
         */
        stopPropagation(): void;
        /**
         * @private
         */
        $isPropagationImmediateStopped: boolean;
        
        /**
         * @language zh_CN
         * 防止对事件流中当前节点中和所有后续节点中的事件侦听器进行处理。此方法会立即生效，并且会影响当前节点中的事件侦听器。
         * 相比之下，在当前节点中的所有事件侦听器都完成处理之前，stopPropagation() 方法不会生效。<br/>
         * 注意：此方法不会取消与此事件相关联的行为；有关此功能的信息，请参阅 preventDefault()。
         * @see #stopPropagation()
         * @see #preventDefault()
         * @version Egret 2.4
         * @platform Web,Native
         */
        stopImmediatePropagation(): void;
        
        /**
         * @language zh_CN
         * 当事件实例传递给Event.release()静态方法时，实例上的clean()方法将会被自动调用。
         * 若此自定义事件的实例设计为可以循环复用的，为了避免引起内存泄露，自定义事件需要覆盖此方法来确保实例被缓存前断开对外部对象的一切引用。
         * @see egret.Event.create()
         * @see egret.Event.release()
         * @version Egret 2.4
         * @platform Web,Native
         */
        protected clean(): void;
        
        /**
         * @language zh_CN
         * 使用指定的 EventDispatcher 对象来抛出 Event 事件对象。抛出的对象将会缓存在对象池上，供下次循环复用。
         * @param target {egret.IEventDispatcher} 派发事件目标
         * @param type {string} 事件类型
         * @param bubbles {boolean} 确定 Event 对象是否参与事件流的冒泡阶段。默认值为 false。
         * @param data {any} 事件data
         * @method egret.Event.dispatchEvent
         * @version Egret 2.4
         * @platform Web,Native
         */
        static dispatchEvent(target: IEventDispatcher, type: string, bubbles?: boolean, data?: any): boolean;
        /**
         * @private
         *
         * @param EventClass
         * @returns
         */
        static _getPropertyData(EventClass: any): any;
        
        /**
         * @language zh_CN
         * 从对象池中取出或创建一个新的事件实例。我们建议您尽可能使用Event.create()和Event.release() 这一对方法来创建和释放事件对象，
         * 这一对方法会将事件实例在内部缓存下来供下次循环使用，减少对象的创建次数,从而获得更高的代码运行性能。<br/>
         * 注意：若使用此方法来创建自定义事件的实例，自定义的构造函数参数列表必须跟Event类一致。
         * @param EventClass Event类名。
         * @param type  事件的类型，可以作为 Event.type 访问。
         * @param bubbles  确定 Event 对象是否参与事件流的冒泡阶段。默认值为 false。
         * @param cancelable 确定是否可以取消 Event 对象。默认值为 false。
         * @example
         * <pre>
         *    var event = Event.create(Event,type, bubbles);
         *    event.data = data;  //可选，若指定义事件上需要附加其他参数，可以在获取实例后在此处设置。
         *    this.dispatchEvent(event);
         *    Event.release(event);
         * </pre>
         * @see #clean()
         * @version Egret 2.4
         * @platform Web,Native
         */
        static create<T extends Event>(EventClass: {
            new (type: string, bubbles?: boolean, cancelable?: boolean): T;
            eventPool?: Event[];
        }, type: string, bubbles?: boolean, cancelable?: boolean): T;
        
        /**
         * @language zh_CN
         * 释放一个事件对象，并缓存到对象池。我们建议您尽可能使用Event.create()和Event.release() 这一对方法来创建和释放事件对象，
         * 这一对方法会将事件实例在内部缓存下来供下次循环使用，减少对象的创建次数,从而获得更高的代码运行性能。<br/>
         * 注意：此方法只能传入由Event.create()创建的事件实例，传入非法对象实例可能会导致报错。
         * @example
         * <pre>
         *    var event = Event.create(Event,type, bubbles);
         *    event.data = data;   //可选，若指定义事件上需要附加其他参数，可以在获取实例后在此处设置。
         *    this.dispatchEvent(event);
         *    Event.release(event);
         * </pre>
         * @see #clean()
         * @version Egret 2.4
         * @platform Web,Native
         */
        static release(event: Event): void;
    }
}
declare module egret {
    
    /**
     * @language zh_CN
     * EventPhase 可为 Event 类的 eventPhase 属性提供值。
     * @version Egret 2.4
     * @platform Web,Native
     * @includeExample egret/events/EventPhase.ts
     */
    const enum EventPhase {
        
        /**
         * @language zh_CN
         * 捕获阶段。
         * @version Egret 2.4
         * @platform Web,Native
         */
        CAPTURING_PHASE = 1,
        
        /**
         * @language zh_CN
         * 目标阶段，是事件流的第二个阶段。
         * @version Egret 2.4
         * @platform Web,Native
         */
        AT_TARGET = 2,
        
        /**
         * @language zh_CN
         * 冒泡阶段。
         * @version Egret 2.4
         * @platform Web,Native
         */
        BUBBLING_PHASE = 3,
    }
}
declare module egret {
    
    /**
     * @language zh_CN
     * 用户将焦点从显示列表中的一个对象更改到另一个对象时，对象将调度 FocusEvent 对象。目前只支持输入文本。
     * 焦点事件：FocusEvent.FOCUS_IN FocusEvent.FOCUS_OUT
     * @version Egret 2.4
     * @platform Web,Native
     */
    class FocusEvent extends egret.Event {
        
        /**
         * @language zh_CN
         * 获得焦点
         * @version Egret 2.4
         * @platform Web,Native
         */
        static FOCUS_IN: string;
        
        /**
         * @language zh_CN
         * 失去焦点
         * @version Egret 2.4
         * @platform Web,Native
         */
        static FOCUS_OUT: string;
        
        /**
         * @language zh_CN
         * 创建一个 egret.FocusEvent 对象
         * @param type  事件的类型，可以作为 Event.type 访问。
         * @param bubbles  确定 Event 对象是否参与事件流的冒泡阶段。默认值为 false。
         * @param cancelable 确定是否可以取消 Event 对象。默认值为 false。
         * @version Egret 2.4
         * @platform Web,Native
         */
        constructor(type: string, bubbles?: boolean, cancelable?: boolean);
    }
}
declare module egret {
    
    /**
     * @language zh_CN
     * GeolocationEvent 提供设备的地理位置信息和获取位置时发生的错误信息
     * @version Egret 2.4
     * @platform Web,Native
     * @includeExample egret/sensor/Geolocation.ts
     * @see http://edn.egret.com/cn/docs/page/662 获取位置信息
     */
    class GeolocationEvent extends Event {
        
        /**
         * @language zh_CN
         * 由于用户拒绝访问位置信息，获取位置信息失败
         * @version Egret 2.4
         * @platform Web,Native
         */
        static PERMISSION_DENIED: string;
        
        /**
         * @language zh_CN
         * 设备位置服务不可用或者超时等原因没有得到位置信息
         * @version Egret 2.4
         * @platform Web,Native
         */
        static UNAVAILABLE: string;
        
        /**
         * @language zh_CN
         * 当前位置的经度信息
         * @version Egret 2.4
         * @platform Web,Native
         */
        longitude: number;
        
        /**
         * @language zh_CN
         * 当前位置的纬度信息
         * @version Egret 2.4
         * @platform Web,Native
         */
        latitude: number;
        
        /**
         * @language zh_CN
         * 当前设备的速度 单位是 米/秒，这个值可能为 null
         * @version Egret 2.4
         * @platform Web,Native
         */
        speed: number;
        
        /**
         * @language zh_CN
         * 表示设备正在前进的方向，单位是度。heading 表示从正北开始顺时针旋转到当前方向的角度，
         * 比如正东是 90 度，正西是 270 度，如果 speed 是 0，heading 为 NaN。
         * @version Egret 2.4
         * @platform Web,Native
         */
        heading: number;
        
        /**
         * @language zh_CN
         * 该位置的海拔信息，如果设备没有实现这个属性时，这个值有可能为 null
         * @version Egret 2.4
         * @platform Web,Native
         */
        altitude: number;
        
        /**
         * @language zh_CN
         * 经纬度的准确性，单位是米
         * @version Egret 2.4
         * @platform Web,Native
         */
        accuracy: number;
        
        /**
         * @language zh_CN
         * 该位置海拔信息的准确性，单位是米，这个值有可能为 null
         * @version Egret 2.4
         * @platform Web,Native
         */
        altitudeAccuracy: number;
        
        /**
         * @language zh_CN
         * 获取位置信息错误时的错误类型。值可能为：
         * @see egret.GeolocationEvent.PERMISSION_DENIED
         * @see egret.GeolocationEvent.UNAVAILABLE
         *
         * @version Egret 2.4
         * @platform Web,Native
         */
        errorType: string;
        
        /**
         * @language zh_CN
         * 获取位置信息错误的错误信息
         * @version Egret 2.4
         * @platform Web,Native
         */
        errorMessage: string;
    }
}
declare module egret {
    
    /**
     * @language zh_CN
     * 在网络请求返回 HTTP 状态代码时，应用程序将调度 HTTPStatusEvent 对象。
     * 在错误或完成事件之前，将始终发送 HTTPStatusEvent 对象。HTTPStatusEvent 对象不一定表示错误条件；它仅反映网络堆栈提供的 HTTP 状态代码（如果有的话）。
     * @version Egret 2.4
     * @platform Web,Native
     */
    class HTTPStatusEvent extends Event {
        
        /**
         * @language zh_CN
         * HTTPStatusEvent.HTTP_STATUS 常量定义 httpStatus 事件对象的 type 属性值。
         * @version Egret 2.4
         * @platform Web,Native
         */
        static HTTP_STATUS: string;
        
        /**
         * @language zh_CN
         * 创建一个 egret.HTTPStatusEvent 对象
         * @param type  事件的类型，可以作为 Event.type 访问。
         * @param bubbles  确定 Event 对象是否参与事件流的冒泡阶段。默认值为 false。
         * @param cancelable 确定是否可以取消 Event 对象。默认值为 false。
         * @version Egret 2.4
         * @platform Web,Native
         */
        constructor(type: string, bubbles?: boolean, cancelable?: boolean);
        /**
         * @private
         */
        private _status;
        
        /**
         * @language zh_CN
         * 由服务器返回的 HTTP 状态代码。
         * @version Egret 2.4
         * @platform Web,Native
         */
        status: number;
        
        /**
         * @language zh_CN
         * 使用指定的EventDispatcher对象来抛出Event事件对象。抛出的对象将会缓存在对象池上，供下次循环复用。
         * @param target {egret.IEventDispatcher} 派发事件目标
         * @param status {number} 由服务器返回的 HTTP 状态代码
         * @version Egret 2.4
         * @platform Web,Native
         */
        static dispatchHTTPStatusEvent(target: IEventDispatcher, status: number): boolean;
    }
}
declare module egret {
    
    /**
     * @language zh_CN
     * IEventDispatcher 接口定义用于添加或删除事件侦听器的方法，检查是否已注册特定类型的事件侦听器，并调度事件。
     * 事件目标是 Egret 事件模型的重要组成部分。事件目标是事件如何通过显示列表层次结构这一问题的焦点。当发生触摸轻拍事件时，
     * 会将事件对象调度到从显示列表根开始的事件流中。事件对象进行到事件目标的往返行程，在概念上，此往返行程被划分为三个阶段：<br/>
     * 捕获阶段包括从根到事件目标节点之前的最后一个节点的行程，目标阶段仅包括事件目标节点，冒泡阶段包括到显示列表的根的回程上遇到的任何后续节点。
     * 通常，使用户定义的类能够调度事件的最简单方法是扩展 EventDispatcher。如果无法扩展（即，如果该类已经扩展了另一个类），
     * 则可以实现 IEventDispatcher 接口，创建 EventDispatcher 成员，并编写一些简单的挂钩，将调用连接到聚合的 EventDispatcher 中。
     * @see egret.EventDispatcher
     * @version Egret 2.4
     * @platform Web,Native
     * @includeExample egret/events/IEventDispatcher.ts
     */
    interface IEventDispatcher extends HashObject {
        
        /**
         * @language zh_CN
         * 使用 EventDispatcher 对象注册事件侦听器对象，以使侦听器能够接收事件通知。可以为特定类型的事件、阶段和优先级在显示列表的所有节
         * 点上注册事件侦听器。成功注册一个事件侦听器后，无法通过额外调用 on() 来更改其优先级。要更改侦听器的优先级，必须
         * 先调用 removeEventListener()。然后，可以使用新的优先级再次注册该侦听器。注册该侦听器后，如果继续调用具有不同 type 或 useCapture
         * 值的 on()，则会创建单独的侦听器注册。<br/>
         * 如果不再需要某个事件侦听器，可调用 EventDispatcher.removeEventListener()
         * 删除它；否则会产生内存问题。由于垃圾回收器不会删除仍包含引用的对象，因此不会从内存中自动删除使用已注册事件侦听器的对象。复制
         * EventDispatcher 实例时并不复制其中附加的事件侦听器。（如果新近创建的节点需要一个事件侦听器，必须在创建该节点后附加该侦听器。）
         * 但是，如果移动 EventDispatcher 实例，则其中附加的事件侦听器也会随之移动。如果在正在处理事件的节点上注册事件侦听器，则不会在当
         * 前阶段触发事件侦听器，但会在事件流的稍后阶段触发，如冒泡阶段。如果从正在处理事件的节点中删除事件侦听器，则该事件侦听器仍由当前操
         * 作触发。删除事件侦听器后，决不会再次调用该事件侦听器（除非再次注册以备将来处理）。
         * @param type 事件的类型。
         * @param listener 处理事件的侦听器函数。此函数必须接受 Event 对象作为其唯一的参数，并且不能返回任何结果，
         * 如下面的示例所示： function(evt:Event):void 函数可以有任何名称。
         * @param thisObject 侦听函数绑定的this对象
         * @param useCapture 确定侦听器是运行于捕获阶段还是运行于冒泡阶段。如果将 useCapture 设置为 true，
         * 则侦听器只在捕获阶段处理事件，而不在冒泡阶段处理事件。如果 useCapture 为 false，则侦听器只在冒泡阶段处理事件。
         * 要在两个阶段都侦听事件，请调用 on() 两次：一次将 useCapture 设置为 true，一次将 useCapture 设置为 false。
         * @param  priority 事件侦听器的优先级。优先级由一个带符号的整数指定。数字越大，优先级越高。优先级为 n 的所有侦听器会在
         * 优先级为 n -1 的侦听器之前得到处理。如果两个或更多个侦听器共享相同的优先级，则按照它们的添加顺序进行处理。默认优先级为 0。
         * @see #once()
         * @see #removeEventListener()
         * @version Egret 2.4
         * @platform Web,Native
         */
        addEventListener(type: string, listener: Function, thisObject: any, useCapture?: boolean, priority?: number): void;
        
        /**
         * @language zh_CN
         * 添加仅回调一次的事件侦听器，此方法与on()方法不同，on()方法会持续产生回调，而此方法在第一次回调时就会自动移除监听。
         * @param type 事件的类型。
         * @param listener 处理事件的侦听器函数。此函数必须接受 Event 对象作为其唯一的参数，并且不能返回任何结果，
         * 如下面的示例所示： function(evt:Event):void 函数可以有任何名称。
         * @param thisObject 侦听函数绑定的this对象
         * @param useCapture 确定侦听器是运行于捕获阶段还是运行于冒泡阶段。如果将 useCapture 设置为 true，
         * 则侦听器只在捕获阶段处理事件，而不在冒泡阶段处理事件。如果 useCapture 为 false，则侦听器只在冒泡阶段处理事件。
         * 要在两个阶段都侦听事件，请调用 once() 两次：一次将 useCapture 设置为 true，一次将 useCapture 设置为 false。
         * @param  priority 事件侦听器的优先级。优先级由一个带符号整数指定。数字越大，优先级越高。优先级为 n 的所有侦听器会在
         * 优先级为 n -1 的侦听器之前得到处理。如果两个或更多个侦听器共享相同的优先级，则按照它们的添加顺序进行处理。默认优先级为 0。
         * @see #on()
         * @see #removeEventListener()
         * @version Egret 2.4
         * @platform Web,Native
         */
        once(type: string, listener: Function, thisObject: any, useCapture?: boolean, priority?: number): void;
        
        /**
         * @language zh_CN
         * 从 EventDispatcher 对象中删除侦听器。如果没有向 EventDispatcher 对象注册任何匹配的侦听器，则对此方法的调用没有任何效果。
         * @param type 事件的类型。
         * @param listener 要删除的侦听器对象
         * @param thisObject 侦听函数绑定的this对象
         * @param useCapture 指出是为捕获阶段还是为冒泡阶段注册了侦听器。如果为捕获阶段以及冒泡阶段注册了侦听器，则需要对
         * removeEventListener() 进行两次调用才能将这两个侦听器删除：一次调用将 useCapture 设置为 true，另一次调用将 useCapture 设置为 false。。
         * @version Egret 2.4
         * @platform Web,Native
         */
        removeEventListener(type: string, listener: Function, thisObject: any, useCapture?: boolean): void;
        
        /**
         * @language zh_CN
         * 检查 EventDispatcher 对象是否为特定事件类型注册了任何侦听器。这样，您就可以确定 EventDispatcher 对象在事件流层次结构中的哪个
         * 位置改变了对事件类型的处理。要确定特定事件类型是否确实会触发事件侦听器，请使用 IEventDispatcher.willTrigger()。hasEventListener()
         * 与 willTrigger() 的区别是：hasEventListener() 只检查它所属的对象，而 willTrigger() 检查整个事件流以查找由 type 参数指定的事件。
         * @param type 事件的类型。
         * @returns 如果指定类型的侦听器已注册，则值为 true；否则，值为 false。
         * @see #willTrigger()
         * @version Egret 2.4
         * @platform Web,Native
         */
        hasEventListener(type: string): boolean;
        
        /**
         * @language zh_CN
         * 将事件分派到事件流中。事件目标是对其调用 dispatchEvent() 方法的 EventDispatcher 对象。
         * @param event 调度到事件流中的 Event 对象。
         * @returns 如果成功调度了事件，则值为 true。值 false 表示失败或对事件调用了 preventDefault()。
         * @version Egret 2.4
         * @platform Web,Native
         */
        dispatchEvent(event: Event): boolean;
        
        /**
         * @language zh_CN
         * 检查是否用此 EventDispatcher 对象或其任何始祖为指定事件类型注册了事件侦听器。将指定类型的事件调度给此
         * EventDispatcher 对象或其任一后代时，如果在事件流的任何阶段触发了事件侦听器，则此方法返回 true。
         * hasEventListener() 与 willTrigger() 方法的区别是：hasEventListener() 只检查它所属的对象，
         * 而 willTrigger() 方法检查整个事件流以查找由 type 参数指定的事件。
         * @param type 事件类型
         * @returns 是否注册过监听器，如果注册过返回true，反之返回false
         * @see #hasEventListener()
         * @version Egret 2.4
         * @platform Web,Native
         */
        willTrigger(type: string): boolean;
    }
}
declare module egret {
    
    /**
     * @language zh_CN
     * @classdesc IO流事件，当错误导致输入或输出操作失败时调度 IOErrorEvent 对象。
     * @version Egret 2.4
     * @platform Web,Native
     * @includeExample egret/events/IOErrorEvent.ts
     */
    class IOErrorEvent extends Event {
        
        /**
         * @language zh_CN
         * io发生错误
         * @version Egret 2.4
         * @platform Web,Native
         */
        static IO_ERROR: string;
        
        /**
         * @language zh_CN
         * 创建一个 egret.IOErrorEvent 对象
         * @param type {string} 事件的类型，可以作为 Event.type 访问。
         * @param bubbles {boolean} 确定 Event 对象是否参与事件流的冒泡阶段。默认值为 false。
         * @param cancelable {boolean} 确定是否可以取消 Event 对象。默认值为 false。
         * @version Egret 2.4
         * @platform Web,Native
         */
        constructor(type: string, bubbles?: boolean, cancelable?: boolean);
        
        /**
         * @language zh_CN
         * 使用指定的EventDispatcher对象来抛出Event事件对象。抛出的对象将会缓存在对象池上，供下次循环复用。
         * @param target {egret.IEventDispatcher} 派发事件目标
         * @version Egret 2.4
         * @platform Web,Native
         */
        static dispatchIOErrorEvent(target: IEventDispatcher): boolean;
    }
}
declare module egret {
    
    /**
     * @language zh_CN
     * MotionEvent 类呈现设备运动的具体信息
     * Acceleration 和 accelerationIncludingGravity 呈现设备三个维度的加速度信息
     * RotationRate 呈现设备的旋转状态信息
     * @version Egret 2.4
     * @platform Web,Native
     * @includeExample egret/sensor/Motion.ts
     */
    class MotionEvent extends Event {
        
        /**
         * @language zh_CN
         * acceleration 表示设备在 X Y Z 轴方将的加速度信息，单位是  m/s2，不包含重力
         * @version Egret 2.4
         * @platform Web,Native
         */
        acceleration: DeviceAcceleration;
        
        /**
         * @language zh_CN
         * acceleration 表示设备在 X Y Z 轴方将的加速度信息，单位是  m/s2，包含重力
         * @version Egret 2.4
         * @platform Web,Native
         */
        accelerationIncludingGravity: DeviceAcceleration;
        
        /**
         * @language zh_CN
         * rotationRate 表示设备在 alpha、 beta 和 gamma 三个轴向的角速度信息，单位是 角度每秒
         * @version Egret 2.4
         * @platform Web,Native
         */
        rotationRate: DeviceRotationRate;
    }
}
declare module egret {
    
    /**
     * @language zh_CN
     * OrientationEvent 提供设备的方向信息
     * 注意: 目前各个浏览器和操作系统处理方向的方式不完全相同，请根据使用场景做相应的校正，
     * 比如使用两次方向数据的变化而不是直接使用方向的值
     * @version Egret 2.4
     * @platform Web,Native
     * @includeExample egret/sensor/DeviceOrientation.ts
     */
    class OrientationEvent extends Event {
        
        /**
         * @language zh_CN
         * 表示设备绕 Z 轴的角度，单位是 角度 范围是 0 到 360
         * @version Egret 2.4
         * @platform Web,Native
         */
        alpha: number;
        
        /**
         * @language zh_CN
         * 表示设备绕 X 轴的角度，单位是 角度 范围是 -180 到 180.
         * 这个值表示设备从前向后的旋转状态
         * @version Egret 2.4
         * @platform Web,Native
         */
        beta: number;
        
        /**
         * @language zh_CN
         * 表示设备绕 Y 轴的角度，单位是 角度 范围是 -90 到 90.
         * 这个值表示设备从前向后的旋转状态
         * @version Egret 2.4
         * @platform Web,Native
         */
        gamma: number;
    }
}
declare module egret {
    
    /**
     * @language zh_CN
     * 当加载操作已开始或套接字已接收到数据时，将调度 ProgressEvent 对象。
     * 有两种类型的进程事件：ProgressEvent.PROGRESS 和 ProgressEvent.SOCKET_DATA。
     * @version Egret 2.4
     * @platform Web,Native
     */
    class ProgressEvent extends egret.Event {
        
        /**
         * @language zh_CN
         * 加载进度发生变化
         * @version Egret 2.4
         * @platform Web,Native
         */
        static PROGRESS: string;
        
        /**
         * @language zh_CN
         * 获取到数据
         * @version Egret 2.4
         * @platform Web,Native
         */
        static SOCKET_DATA: string;
        
        /**
         * @language zh_CN
         * 在侦听器处理事件时加载的项数或字节数。
         * @version Egret 2.4
         * @platform Web,Native
         */
        bytesLoaded: number;
        
        /**
         * @language zh_CN
         * 如果加载过程成功，将加载的总项数或总字节数。
         * @version Egret 2.4
         * @platform Web,Native
         */
        bytesTotal: number;
        
        /**
         * @language zh_CN
         * 创建一个 egret.ProgressEvent 对象
         * @param type  事件的类型，可以作为 Event.type 访问。
         * @param bubbles  确定 Event 对象是否参与事件流的冒泡阶段。默认值为 false。
         * @param cancelable 确定是否可以取消 Event 对象。默认值为 false。
         * @param bytesLoaded {number} 加载的项数或字节数
         * @param bytesTotal {number} 加载的总项数或总字节数
         * @version Egret 2.4
         * @platform Web,Native
         */
        constructor(type: string, bubbles?: boolean, cancelable?: boolean, bytesLoaded?: number, bytesTotal?: number);
        
        /**
         * @language zh_CN
         * 使用指定的EventDispatcher对象来抛出Event事件对象。抛出的对象将会缓存在对象池上，供下次循环复用。
         * @param target {egret.IEventDispatcher} 派发事件目标
         * @param type {string} 事件类型
         * @param bytesLoaded {number} 加载的项数或字节数
         * @param bytesTotal {number} 加载的总项数或总字节数
         * @version Egret 2.4
         * @platform Web,Native
         */
        static dispatchProgressEvent(target: IEventDispatcher, type: string, bytesLoaded?: number, bytesTotal?: number): boolean;
    }
}
declare module egret {
    
    /**
     * @language zh_CN
     * 当舞台的方向更改时，Stage 对象将调度 StageOrientationEvent 对象。
     * @version Egret 2.4
     * @platform Web,Native
     * @includeExample egret/events/StageOrientationEvent.ts
     */
    class StageOrientationEvent extends Event {
        
        /**
         * @language zh_CN
         * 屏幕旋转后派发的事件。
         * @version Egret 2.4
         * @platform Web,Native
         */
        static ORIENTATION_CHANGE: string;
        
        /**
         * @language zh_CN
         * 创建包含与舞台方向事件相关的特定信息的 StageOrientationEvent 对象。
         * @param type 事件的类型：StageOrientationEvent.ORIENTATION_CHANGE
         * @param bubbles 表示 Event 对象是否参与事件流的冒泡阶段。
         * @param cancelable 表示是否可以取消 Event 对象。
         * @version Egret 2.4
         * @platform Web,Native
         */
        constructor(type: string, bubbles?: boolean, cancelable?: boolean);
        
        /**
         * @language zh_CN
         * 派发一个屏幕旋转的事件。
         * @param target {egret.IEventDispatcher} Distribute event target
         * @param type {egret.IEventDispatcher} Distribute event type
         * @version Egret 2.4
         * @platform Web,Native
         */
        static dispatchStageOrientationEvent(target: IEventDispatcher, type: string): boolean;
    }
}
declare module egret {
    
    /**
     * @language zh_CN
     * 用户在富文本中单击超链接时，对象将调度 TextEvent 对象。文本事件类型：TextEvent.LINK。
     * @version Egret 2.4
     * @platform Web,Native
     * @includeExample egret/events/TextEvent.ts
     */
    class TextEvent extends Event {
        
        /**
         * @language zh_CN
         * 创建一个 TextEvent 对象，其中包含有关文本事件的信息。
         * @param type 事件的类型，可以作为 TextEvent.type 访问。
         * @param bubbles 确定 Event 对象是否参与事件流的冒泡阶段。默认值为 false。
         * @param cancelable 确定是否可以取消 Event 对象。默认值为 false。
         * @param text 用户输入的一个或多个文本字符。事件侦听器可以通过 text 属性访问此信息。
         * @version Egret 2.4
         * @platform Web,Native
         */
        constructor(type: string, bubbles?: boolean, cancelable?: boolean, text?: string);
        
        /**
         * @language zh_CN
         * 定义 link 事件对象的 type 属性值。
         * @version Egret 2.4
         * @platform Web,Native
         */
        static LINK: string;
        
        /**
         * @language zh_CN
         * 在 TextEvent.LINK 事件中，event对应的字符串。
         * @version Egret 2.4
         * @platform Web,Native
         */
        text: string;
        
        /**
         * @language zh_CN
         * 使用指定的EventDispatcher对象来抛出TextEvent事件对象。抛出的对象将会缓存在对象池上，供下次循环复用。
         * @param target 派发事件目标
         * @param type  事件类型
         * @param text  TextEvent对象的text赋值
         * @version Egret 2.4
         * @platform Web,Native
         */
        static dispatchTextEvent(target: IEventDispatcher, type: string, text: string): boolean;
    }
}
declare module egret {
    
    /**
     * @language zh_CN
     * 每当 Timer 对象达到由 Timer.delay 属性指定的间隔时，Timer 对象即会调度 TimerEvent 对象。
     * @see egret.Timer
     * @version Egret 2.4
     * @platform Web,Native
     * @includeExample egret/events/TimerEvent.ts
     */
    class TimerEvent extends Event {
        
        /**
         * @language zh_CN
         * 每当 Timer 对象达到根据 Timer.delay 属性指定的间隔时调度。
         * @version Egret 2.4
         * @platform Web,Native
         */
        static TIMER: string;
        
        /**
         * @language zh_CN
         * 每当它完成 Timer.repeatCount 设置的请求数后调度。
         * @version Egret 2.4
         * @platform Web,Native
         */
        static TIMER_COMPLETE: string;
        
        /**
         * @language zh_CN
         * 创建一个 Event 对象，其中包含有关 timer 事件的特定信息。
         * @param type 事件的类型。事件侦听器可以通过继承的 type 属性访问此信息。
         * @param bubbles 确定 Event 对象是否冒泡。事件侦听器可以通过继承的 bubbles 属性访问此信息。
         * @param cancelable 确定是否可以取消 Event 对象。事件侦听器可以通过继承的 cancelable 属性访问此信息。
         * @version Egret 2.4
         * @platform Web,Native
         */
        constructor(type: string, bubbles?: boolean, cancelable?: boolean);
        
        /**
         * @language zh_CN
         * 如果已修改显示列表，调用此方法将会忽略帧频限制，在此事件处理完成后立即重绘屏幕。
         * @example
         * <pre>
         *    function onTimer(event:TimerEvent):void {
         *        if (40 < mySp.x && mySp.x < 375) {
         *            mySp.x-= 50;
         *        } else {
         *            mySp.x=374;
         *        }
         *        event.updateAfterEvent();
         *    }
         *
         *    var moveTimer:Timer=new Timer(50,250);
         *    moveTimer.addEventListener(TimerEvent.TIMER,onTimer);
         *    moveTimer.start();
         * </pre>
         * @version Egret 2.4
         * @platform Web,Native
         */
        updateAfterEvent(): void;
        
        /**
         * @language zh_CN
         * 使用指定的EventDispatcher对象来抛出事件对象。抛出的对象将会缓存在对象池上，供下次循环复用。
         * @param target 事件派发目标
         * @param type 事件的类型。事件侦听器可以通过继承的 type 属性访问此信息。
         * @param bubbles 确定 Event 对象是否冒泡。事件侦听器可以通过继承的 bubbles 属性访问此信息。
         * @param cancelable 确定是否可以取消 Event 对象。事件侦听器可以通过继承的 cancelable 属性访问此信息。
         * @see egret.Event.create()
         * @see egret.Event.release()
         * @version Egret 2.4
         * @platform Web,Native
         */
        static dispatchTimerEvent(target: IEventDispatcher, type: string, bubbles?: boolean, cancelable?: boolean): boolean;
    }
}
declare module egret {
    
    /**
     * @language zh_CN
     * Point 对象表示二维坐标系统中的某个位置，其中 x 表示水平轴，y 表示垂直轴。
     * @version Egret 2.4
     * @platform Web,Native
     * @includeExample egret/geom/Point.ts
     */
    class Point extends HashObject {
        
        /**
         * @language zh_CN
         * 释放一个Point实例到对象池
         * @version Egret 2.4
         * @platform Web,Native
         */
        static release(point: Point): void;
        
        /**
         * @language zh_CN
         * 从对象池中取出或创建一个新的Point对象。
         * @param x 该对象的x属性值，默认为0
         * @param y 该对象的y属性值，默认为0
         * @version Egret 2.4
         * @platform Web,Native
         */
        static create(x: number, y: number): Point;
        
        /**
         * @language zh_CN
         * 创建一个 egret.Point 对象.若不传入任何参数，将会创建一个位于（0，0）位置的点。
         * @param x 该对象的x属性值，默认为0
         * @param y 该对象的y属性值，默认为0
         * @version Egret 2.4
         * @platform Web,Native
         */
        constructor(x?: number, y?: number);
        
        /**
         * @language zh_CN
         * 该点的水平坐标。
         * @default 0
         * @version Egret 2.4
         * @platform Web,Native
         */
        x: number;
        
        /**
         * @language zh_CN
         * 该点的垂直坐标。
         * @default 0
         * @version Egret 2.4
         * @platform Web,Native
         */
        y: number;
        
        /**
         * @language zh_CN
         * 从 (0,0) 到此点的线段长度。
         * @version Egret 2.4
         * @platform Web,Native
         */
        length: number;
        
        /**
         * @language zh_CN
         * 将 Point 的成员设置为指定值
         * @param x 该对象的x属性值
         * @param y 该对象的y属性值
         * @version Egret 2.4
         * @platform Web,Native
         */
        setTo(x: number, y: number): Point;
        
        /**
         * @language zh_CN
         * 克隆点对象
         * @version Egret 2.4
         * @platform Web,Native
         */
        clone(): Point;
        
        /**
         * @language zh_CN
         * 确定两个点是否相同。如果两个点具有相同的 x 和 y 值，则它们是相同的点。
         * @param toCompare 要比较的点。
         * @returns 如果该对象与此 Point 对象相同，则为 true 值，如果不相同，则为 false。
         * @version Egret 2.4
         * @platform Web,Native
         */
        equals(toCompare: Point): boolean;
        
        /**
         * @language zh_CN
         * 返回 pt1 和 pt2 之间的距离。
         * @param p1 第一个点
         * @param p2 第二个点
         * @returns 第一个点和第二个点之间的距离。
         * @version Egret 2.4
         * @platform Web,Native
         */
        static distance(p1: Point, p2: Point): number;
        
        /**
         * @language zh_CN
         * 将源 Point 对象中的所有点数据复制到调用方 Point 对象中。
         * @param sourcePoint 要从中复制数据的 Point 对象。
         * @version Egret 2.4
         * @platform Web,Native
         */
        copyFrom(sourcePoint: Point): void;
        
        /**
         * @language zh_CN
         * 将另一个点的坐标添加到此点的坐标以创建一个新点。
         * @param v 要添加的点。
         * @returns 新点。
         * @version Egret 2.4
         * @platform Web,Native
         */
        add(v: Point): Point;
        
        /**
         * @language zh_CN
         * 确定两个指定点之间的点。
         * 参数 f 确定新的内插点相对于参数 pt1 和 pt2 指定的两个端点所处的位置。参数 f 的值越接近 1.0，则内插点就越接近第一个点（参数 pt1）。参数 f 的值越接近 0，则内插点就越接近第二个点（参数 pt2）。
         * @param pt1 第一个点。
         * @param pt2 第二个点。
         * @param f 两个点之间的内插级别。表示新点将位于 pt1 和 pt2 连成的直线上的什么位置。如果 f=1，则返回 pt1；如果 f=0，则返回 pt2。
         * @returns 新的内插点。
         * @version Egret 2.4
         * @platform Web,Native
         */
        static interpolate(pt1: Point, pt2: Point, f: number): Point;
        
        /**
         * @language zh_CN
         * 将 (0,0) 和当前点之间的线段缩放为设定的长度。
         * @param thickness 缩放值。例如，如果当前点为 (0,5) 并且您将它规范化为 1，则返回的点位于 (0,1) 处。
         * @version Egret 2.4
         * @platform Web,Native
         */
        normalize(thickness: number): void;
        
        /**
         * @language zh_CN
         * 按指定量偏移 Point 对象。dx 的值将添加到 x 的原始值中以创建新的 x 值。dy 的值将添加到 y 的原始值中以创建新的 y 值。
         * @param dx 水平坐标 x 的偏移量。
         * @param dy 水平坐标 y 的偏移量。
         * @version Egret 2.4
         * @platform Web,Native
         */
        offset(dx: number, dy: number): void;
        
        /**
         * @language zh_CN
         * 将一对极坐标转换为笛卡尔点坐标。
         * @param len 极坐标对的长度。
         * @param angle 极坐标对的角度（以弧度表示）。
         * @version Egret 2.4
         * @platform Web,Native
         */
        static polar(len: number, angle: number): Point;
        
        /**
         * @language zh_CN
         * 从此点的坐标中减去另一个点的坐标以创建一个新点。
         * @param v 要减去的点。
         * @returns 新点。
         * @version Egret 2.4
         * @platform Web,Native
         */
        subtract(v: Point): Point;
        
        /**
         * @language zh_CN
         * 返回包含 x 和 y 坐标的值的字符串。该字符串的格式为 "(x=x, y=y)"，因此为点 23,17 调用 toString() 方法将返回 "(x=23, y=17)"。
         * @returns 坐标的字符串表示形式。
         * @version Egret 2.4
         * @platform Web,Native
         */
        toString(): string;
    }
    /**
     * @private
     * 仅供框架内复用，要防止暴露引用到外部。
     */
    var $TempPoint: Point;
}
declare module egret {
    
    /**
     * @language zh_CN
     * 使用 TouchEvent 类，您可以处理设备上那些检测用户与设备之间的接触的事件。
     * 当用户与带有触摸屏的移动电话或平板电脑等设备交互时，用户通常使用手指或指针设备接触屏幕。可使用 TouchEvent
     * 类开发响应基本触摸事件（如单个手指点击）的应用程序。使用此类中定义的事件类型创建事件侦听器。
     * 注意：当对象嵌套在显示列表中时，触摸事件的目标将是显示列表中可见的最深的可能嵌套对象。
     * 此对象称为目标节点。要使目标节点的祖代（祖代是一个包含显示列表中所有目标节点的对象，从舞台到目标节点的父节点均包括在内）
     * 接收触摸事件的通知，请对祖代节点使用 EventDispatcher.on() 并将 type 参数设置为要检测的特定触摸事件。
     *
     * @version Egret 2.4
     * @platform Web,Native
     * @includeExample egret/events/TouchEvent.ts
     */
    class TouchEvent extends Event {
        
        /**
         * @language zh_CN
         * 当用户触碰设备时进行调度，而且会连续调度，直到接触点被删除。
         * @version Egret 2.4
         * @platform Web,Native
         */
        static TOUCH_MOVE: string;
        
        /**
         * @language zh_CN
         * 当用户第一次触摸启用触摸的设备时（例如，用手指触摸配有触摸屏的移动电话或平板电脑）调度。
         * @version Egret 2.4
         * @platform Web,Native
         */
        static TOUCH_BEGIN: string;
        
        /**
         * @language zh_CN
         * 当用户移除与启用触摸的设备的接触时（例如，将手指从配有触摸屏的移动电话或平板电脑上抬起）调度。
         * @version Egret 2.4
         * @platform Web,Native
         */
        static TOUCH_END: string;
        
        /**
         * @language zh_CN
         * 由于某个事件取消了触摸时触发。比如 eui.Scroller 在开始滚动后会触发 'TOUCH_CANCEL' 事件，不再触发后续的 'TOUCH_END' 和 'TOUCH_TAP' 事件
         * @version Egret 3.0.1
         * @platform Web,Native
         */
        static TOUCH_CANCEL: string;
        
        /**
         * @language zh_CN
         * 当用户在触摸设备上与开始触摸的同一 DisplayObject 实例上抬起接触点时调度。
         * @version Egret 2.4
         * @platform Web,Native
         */
        static TOUCH_TAP: string;
        
        /**
         * @language zh_CN
         * 当用户在触摸设备上与开始触摸的不同 DisplayObject 实例上抬起接触点时调度。
         * @version Egret 2.4
         * @platform Web,Native
         */
        static TOUCH_RELEASE_OUTSIDE: string;
        /**
         * @deprecated
         * @version Egret 2.4
         * @platform Web,Native
         */
        static TOUCH_ROLL_OUT: string;
        /**
         * @deprecated
         * @version Egret 2.4
         * @platform Web,Native
         */
        static TOUCH_ROLL_OVER: string;
        
        /**
         * @language zh_CN
         * 创建一个 TouchEvent 对象，其中包含有关Touch事件的信息
         * @param type 事件的类型，可以作为 Event.type 访问。
         * @param bubbles 确定 Event 对象是否参与事件流的冒泡阶段。默认值为 false。
         * @param cancelable 确定是否可以取消 Event 对象。默认值为 false。
         * @param stageX 事件发生点在全局舞台坐标系中的水平坐标
         * @param stageY 事件发生点在全局舞台坐标系中的垂直坐标
         * @param touchPointID 分配给触摸点的唯一标识号
         * @version Egret 2.4
         * @platform Web,Native
         */
        constructor(type: string, bubbles?: boolean, cancelable?: boolean, stageX?: number, stageY?: number, touchPointID?: number);
        /**
         * @private
         */
        $initTo(stageX: number, stageY: number, touchPointID: number): void;
        /**
         * @private
         */
        $stageX: number;
        
        /**
         * @language zh_CN
         * 事件发生点在全局舞台坐标中的水平坐标。
         * @version Egret 2.4
         * @platform Web,Native
         */
        stageX: number;
        /**
         * @private
         */
        $stageY: number;
        
        /**
         * @language zh_CN
         * 事件发生点在全局舞台坐标中的垂直坐标。
         * @version Egret 2.4
         * @platform Web,Native
         */
        stageY: number;
        private _localX;
        
        /**
         * @language zh_CN
         * 事件发生点相对于所属显示对象的水平坐标。
         * @version Egret 2.4
         * @platform Web,Native
         */
        localX: number;
        private _localY;
        
        /**
         * @language zh_CN
         * 事件发生点相对于所属显示对象的垂直坐标。
         * @version Egret 2.4
         * @platform Web,Native
         */
        localY: number;
        private targetChanged;
        /**
         * @private
         */
        private getLocalXY();
        $setTarget(target: any): boolean;
        
        /**
         * @language zh_CN
         * 分配给触摸点的唯一标识号
         * @version Egret 2.4
         * @platform Web,Native
         */
        touchPointID: number;
        
        /**
         * @language zh_CN
         * 如果已修改显示列表，调用此方法将会忽略帧频限制，在此事件处理完成后立即重绘屏幕。
         * @version Egret 2.4
         * @platform Web,Native
         */
        updateAfterEvent(): void;
        
        /**
         * @language zh_CN
         * 表示触摸已按下 (true) 还是未按下 (false)。
         * @version Egret 2.4
         * @platform Web,Native
         */
        touchDown: boolean;
        
        /**
         * @language zh_CN
         * 使用指定的EventDispatcher对象来抛出Event事件对象。抛出的对象将会缓存在对象池上，供下次循环复用。
         * @param target 派发事件目标
         * @param type 事件的类型，可以作为 Event.type 访问。
         * @param bubbles 确定 Event 对象是否参与事件流的冒泡阶段。默认值为 false。
         * @param cancelable 确定是否可以取消 Event 对象。默认值为 false。
         * @param stageX 事件发生点在全局舞台坐标系中的水平坐标
         * @param stageY 事件发生点在全局舞台坐标系中的垂直坐标
         * @param touchPointID 分配给触摸点的唯一标识号
         *
         * @see egret.Event.create()
         * @see egret.Event.release()
         *
         * @version Egret 2.4
         * @platform Web,Native
         */
        static dispatchTouchEvent(target: IEventDispatcher, type: string, bubbles?: boolean, cancelable?: boolean, stageX?: number, stageY?: number, touchPointID?: number, touchDown?: boolean): boolean;
    }
}
declare module egret {
    
    /**
     * @language zh_CN
     * h5与native交互。
     * @see http://edn.egret.com/cn/article/index/id/714 Egret 与 Native 通信基本技巧
     * @version Egret 2.4
     * @platform Web,Native
     * @includeExample egret/external/ExternalInterface.ts
     */
    interface ExternalInterface {
    }
    var ExternalInterface: {
        
        /**
         * @language zh_CN
         * 调用 functionName，并将value传入到native中。
         * @version Egret 2.4
         * @platform Web,Native
         */
        call(functionName: string, value: string): void;
        
        /**
         * @language zh_CN
         * 监听 functionName 回调，需要在native中有调用 functionName 这个字段，而不是 此类的call。
         * @version Egret 2.4
         * @platform Web,Native
         */
        addCallback(functionName: string, listener: (value) => void): void;
    };
}
declare module egret {
    /**
     * @private
     * @version Egret 2.4
     * @platform Web,Native
     */
    const enum BitmapFilterQuality {
        /**
         * 定义低品质滤镜设置
         * @private
         * @version Egret 2.4
         * @platform Web,Native
         */
        LOW = 1,
        /**
         * 定义中等品质滤镜设置
         * @private
         * @version Egret 2.4
         * @platform Web,Native
         */
        MEDIUM = 2,
        /**
         * 定义高品质滤镜设置
         * @private
         * @version Egret 2.4
         * @platform Web,Native
         */
        HIGH = 3,
    }
}
declare module egret {
    /**
     * @private
     * @version Egret 2.4
     * @platform Web,Native
     */
    class Filter extends HashObject {
        /**
         * @version Egret 2.4
         * @platform Web,Native
         */
        type: string;
        private $targets;
        $addTarget(target: DisplayObject): void;
        $removeTarget(target: DisplayObject): void;
        protected invalidate(): void;
    }
}
declare module egret {
    
    /**
     * @language zh_CN
     * 可使用 BlurFilter 类将模糊视觉效果应用于显示对象。模糊效果可以柔化图像的细节。
     * 您可以生成一些模糊效果，范围从创建一个柔化的、未聚焦的外观到高斯模糊（就像通过半透明玻璃查看图像一样的朦胧的外观）。
     * @version Egret 3.1.0
     * @platform Web
     * @see http://edn.egret.com/cn/docs/page/947#模糊滤镜 模糊滤镜
     */
    class BlurFilter extends Filter {
        
        /**
         * @language zh_CN
         * 创建一个 BlurFilter 对象。
         * @version Egret 3.1.0
         * @platform Web
         */
        constructor(blurX: number, blurY: number);
        
        /**
         * @language zh_CN
         * 水平模糊量。
         * @version Egret 3.1.0
         * @platform Web
         */
        blurX: number;
        private $blurX;
        
        /**
         * @language zh_CN
         * 垂直模糊量。
         * @version Egret 3.1.0
         * @platform Web
         */
        blurY: number;
        private $blurY;
    }
}
declare module egret {
    
    /**
     * @language zh_CN
     * 使用 ColorMatrixFilter 类可以将 4 x 5 矩阵转换应用于输入图像上的每个像素的 RGBA 颜色和 Alpha 值，以生成具有一组新的 RGBA 颜色和 Alpha 值的结果。
     * 该类允许饱和度更改、色相旋转、亮度为 Alpha 以及各种其他效果。
     * @version Egret 3.1.0
     * @platform Web
     * @see http://edn.egret.com/cn/docs/page/947 颜色矩阵滤镜
     */
    class ColorMatrixFilter extends Filter {
        /**
         * @private
         */
        $matrix: Array<number>;
        /**
         * @private
         */
        private matrix2;
        
        /**
         * @language zh_CN
         * 创建一个 ColorMatrixFilter 对象。
         * @version Egret 3.1.0
         * @platform Web
         */
        constructor(matrix?: Array<number>);
        
        /**
         * @language zh_CN
         * 构成应用于所呈示的元素的一个 4x5 矩阵的、以逗号分隔的 20 个双精度数的列表。
         * 矩阵以行作为主要顺序，即用第一行五个元素乘以矢量 [srcR,srcG,srcB,srcA,1] 以确定输出的红色值，用第二行的五个元素确定输出的绿色值，等等。
         * 该值必须为 20 个数字组成的数组或以逗号分隔的字符串。
         * @version Egret 3.1.0
         * @platform Web
         */
        matrix: Array<number>;
        /**
         * @private
         */
        private setMatrix(value);
    }
}
declare module egret {
    /**
     * @class egret.GlowFilter
     * @classdesc
     * 使用 GlowFilter 类可以对显示对象应用发光效果。在投影滤镜的 distance 和 angle 属性设置为 0 时，发光滤镜与投影滤镜极为相似。
     * @extends egret.Filter
     * @private
     * @version Egret 2.4
     * @platform Web,Native
     */
    class GlowFilter extends Filter {
        color: number;
        alpha: number;
        blurX: number;
        blurY: number;
        strength: number;
        quality: number;
        inner: boolean;
        knockout: boolean;
        /**
         * @private
         */
        $red: number;
        /**
         * @private
         */
        $green: number;
        /**
         * @private
         */
        $blue: number;
        /**
         * 初始化 GlowFilter 对象
         * @method egret.GlowFilter#constructor
         * @param color {number} 光晕颜色，采用十六进制格式 0xRRGGBB。默认值为 0xFF0000。
         * @param alpha {number} 颜色的 Alpha 透明度值。有效值为 0 到 1。例如，0.25 设置透明度值为 25%。
         * @param blurX {number} 水平模糊量。有效值为 0 到 255（浮点）。
         * @param blurY {number} 垂直模糊量。有效值为 0 到 255（浮点）。
         * @param strength {number} 印记或跨页的强度。该值越高，压印的颜色越深，而且发光与背景之间的对比度也越强。有效值为 0 到 255。
         * @param quality {number} 应用滤镜的次数。
         * @param inner {boolean} 指定发光是否为内侧发光。值 true 指定发光是内侧发光。值 false 指定发光是外侧发光（对象外缘周围的发光）。暂未实现。
         * @param knockout {number} 指定对象是否具有挖空效果。值为 true 将使对象的填充变为透明，并显示文档的背景颜色。暂未实现。
         * @version Egret 2.4
         * @platform Web,Native
         */
        constructor(color?: number, alpha?: number, blurX?: number, blurY?: number, strength?: number, quality?: number, inner?: boolean, knockout?: boolean);
    }
}
declare module egret {
    /**
     * @class egret.DropShadowFilter
     * @classdesc
     * 可使用 DropShadowFilter 类向显示对象添加投影。
     * @extends egret.GlowFilter
     * @private
     * @version Egret 2.4
     * @platform Web,Native
     */
    class DropShadowFilter extends GlowFilter {
        distance: number;
        angle: number;
        /**
         * 初始化 DropShadowFilter 对象
         * @method egret.GlowFilter#constructor
         * @param distance {number} 阴影的偏移距离，以像素为单位。
         * @param angle {number} 阴影的角度，0 到 360 度（浮点）。
         * @param color {number} 光晕颜色，采用十六进制格式 0xRRGGBB。默认值为 0xFF0000。
         * @param alpha {number} 颜色的 Alpha 透明度值。有效值为 0 到 1。例如，0.25 设置透明度值为 25%。
         * @param blurX {number} 水平模糊量。有效值为 0 到 255（浮点）。
         * @param blurY {number} 垂直模糊量。有效值为 0 到 255（浮点）。
         * @param strength {number} 印记或跨页的强度。该值越高，压印的颜色越深，而且发光与背景之间的对比度也越强。有效值为 0 到 255。暂未实现。
         * @param quality {number} 应用滤镜的次数。
         * @param inner {boolean} 指定发光是否为内侧发光。值 true 指定发光是内侧发光。值 false 指定发光是外侧发光（对象外缘周围的发光）。暂未实现。
         * @param knockout {number} 指定对象是否具有挖空效果。值为 true 将使对象的填充变为透明，并显示文档的背景颜色。暂未实现。
         * @version Egret 2.4
         * @platform Web,Native
         */
        constructor(distance?: number, angle?: number, color?: number, alpha?: number, blurX?: number, blurY?: number, strength?: number, quality?: number, inner?: boolean, knockout?: boolean, hideObject?: boolean);
    }
}
declare module egret {
    /**
     * @private
     */
    var $cos: (angle: number) => number;
    /**
     * @private
     */
    var $sin: (angle: number) => number;
    
    /**
     * @language zh_CN
     * Matrix 类表示一个转换矩阵，它确定如何将点从一个坐标空间映射到另一个坐标空间。
     * 您可以对一个显示对象执行不同的图形转换，方法是设置 Matrix 对象的属性，将该 Matrix
     * 对象应用于显示对象的 matrix 属性。这些转换函数包括平移（x 和 y 重新定位）、旋转、缩放和倾斜。
     * @version Egret 2.4
     * @platform Web,Native
     * @includeExample egret/geom/Matrix.ts
     */
    class Matrix extends HashObject {
        
        /**
         * @language zh_CN
         * 释放一个Matrix实例到对象池
         * @param matrix 需要回收的 matrix
         * @version Egret 2.4
         * @platform Web,Native
         */
        static release(matrix: Matrix): void;
        
        /**
         * @language zh_CN
         * 从对象池中取出或创建一个新的Matrix对象。
         * @version Egret 2.4
         * @platform Web,Native
         */
        static create(): Matrix;
        
        /**
         * @language zh_CN
         * 使用指定参数创建一个 Matrix 对象
         * @param a 缩放或旋转图像时影响像素沿 x 轴定位的值。
         * @param b 旋转或倾斜图像时影响像素沿 y 轴定位的值。
         * @param c 旋转或倾斜图像时影响像素沿 x 轴定位的值。
         * @param d 缩放或旋转图像时影响像素沿 y 轴定位的值。
         * @param tx 沿 x 轴平移每个点的距离。
         * @param ty 沿 y 轴平移每个点的距离。
         * @version Egret 2.4
         * @platform Web,Native
         */
        constructor(a?: number, b?: number, c?: number, d?: number, tx?: number, ty?: number);
        
        /**
         * @language zh_CN
         * 缩放或旋转图像时影响像素沿 x 轴定位的值
         * @default 1
         * @version Egret 2.4
         * @platform Web,Native
         */
        a: number;
        
        /**
         * @language zh_CN
         * 旋转或倾斜图像时影响像素沿 y 轴定位的值
         * @default 0
         * @version Egret 2.4
         * @platform Web,Native
         */
        b: number;
        
        /**
         * @language zh_CN
         * 旋转或倾斜图像时影响像素沿 x 轴定位的值
         * @default 0
         * @version Egret 2.4
         * @platform Web,Native
         */
        c: number;
        
        /**
         * @language zh_CN
         * 缩放或旋转图像时影响像素沿 y 轴定位的值
         * @default 1
         * @version Egret 2.4
         * @platform Web,Native
         */
        d: number;
        
        /**
         * @language zh_CN
         * 沿 x 轴平移每个点的距离
         * @default 0
         * @version Egret 2.4
         * @platform Web,Native
         */
        tx: number;
        
        /**
         * @language zh_CN
         * 沿 y 轴平移每个点的距离
         * @default 0
         * @version Egret 2.4
         * @platform Web,Native
         */
        ty: number;
        
        /**
         * @language zh_CN
         * 返回一个新的 Matrix 对象，它是此矩阵的克隆，带有与所含对象完全相同的副本。
         * @version Egret 2.4
         * @platform Web,Native
         */
        clone(): Matrix;
        
        /**
         * @language zh_CN
         * 将某个矩阵与当前矩阵连接，从而将这两个矩阵的几何效果有效地结合在一起。在数学术语中，将两个矩阵连接起来与使用矩阵乘法将它们结合起来是相同的。
         * @param other 要连接到源矩阵的矩阵。
         * @version Egret 2.4
         * @platform Web,Native
         */
        concat(other: Matrix): void;
        
        /**
         * @language zh_CN
         * 将源 Matrix 对象中的所有矩阵数据复制到调用方 Matrix 对象中。
         * @param other 要拷贝的目标矩阵
         * @version Egret 2.4
         * @platform Web,Native
         */
        copyFrom(other: Matrix): Matrix;
        
        /**
         * @language zh_CN
         * 为每个矩阵属性设置一个值，该值将导致矩阵无转换。通过应用恒等矩阵转换的对象将与原始对象完全相同。
         * 调用 identity() 方法后，生成的矩阵具有以下属性：a=1、b=0、c=0、d=1、tx=0 和 ty=0。
         * @version Egret 2.4
         * @platform Web,Native
         */
        identity(): void;
        
        /**
         * @language zh_CN
         * 执行原始矩阵的逆转换。
         * 您可以将一个逆矩阵应用于对象来撤消在应用原始矩阵时执行的转换。
         * @version Egret 2.4
         * @platform Web,Native
         */
        invert(): void;
        /**
         * @private
         */
        $invertInto(target: Matrix): void;
        
        /**
         * @language zh_CN
         * 对 Matrix 对象应用旋转转换。
         * rotate() 方法将更改 Matrix 对象的 a、b、c 和 d 属性。
         * @param angle 以弧度为单位的旋转角度。
         * @version Egret 2.4
         * @platform Web,Native
         */
        rotate(angle: number): void;
        
        /**
         * @language zh_CN
         * 对矩阵应用缩放转换。x 轴乘以 sx，y 轴乘以 sy。
         * scale() 方法将更改 Matrix 对象的 a 和 d 属性。
         * @param sx 用于沿 x 轴缩放对象的乘数。
         * @param sy 用于沿 y 轴缩放对象的乘数。
         * @version Egret 2.4
         * @platform Web,Native
         */
        scale(sx: number, sy: number): void;
        
        /**
         * @language zh_CN
         * 将 Matrix 的成员设置为指定值
         * @param a 缩放或旋转图像时影响像素沿 x 轴定位的值。
         * @param b 旋转或倾斜图像时影响像素沿 y 轴定位的值。
         * @param c 旋转或倾斜图像时影响像素沿 x 轴定位的值。
         * @param d 缩放或旋转图像时影响像素沿 y 轴定位的值。
         * @param tx 沿 x 轴平移每个点的距离。
         * @param ty 沿 y 轴平移每个点的距离。
         * @version Egret 2.4
         * @platform Web,Native
         */
        setTo(a: number, b: number, c: number, d: number, tx: number, ty: number): Matrix;
        
        /**
         * @language zh_CN
         * 返回将 Matrix 对象表示的几何转换应用于指定点所产生的结果。
         * @param pointX 想要获得其矩阵转换结果的点的x坐标。
         * @param pointY 想要获得其矩阵转换结果的点的y坐标。
         * @param resultPoint 框架建议尽可能减少创建对象次数来优化性能，可以从外部传入一个复用的Point对象来存储结果，若不传入将创建一个新的Point对象返回。
         * @returns 由应用矩阵转换所产生的点。
         * @version Egret 2.4
         * @platform Web,Native
         */
        transformPoint(pointX: number, pointY: number, resultPoint?: Point): Point;
        
        /**
         * @language zh_CN
         * 沿 x 和 y 轴平移矩阵，由 dx 和 dy 参数指定。
         * @param dx 沿 x 轴向右移动的量（以像素为单位）。
         * @param dy 沿 y 轴向下移动的量（以像素为单位）。
         * @version Egret 2.4
         * @platform Web,Native
         */
        translate(dx: number, dy: number): void;
        
        /**
         * @language zh_CN
         * 是否与另一个矩阵数据相等
         * @param other 要比较的另一个矩阵对象。
         * @returns 是否相等，ture表示相等。
         * @version Egret 2.4
         * @platform Web,Native
         */
        equals(other: Matrix): boolean;
        
        /**
         * @language zh_CN
         * 前置矩阵
         * @param a 缩放或旋转图像时影响像素沿 x 轴定位的值
         * @param b 缩放或旋转图像时影响像素沿 y 轴定位的值
         * @param c 缩放或旋转图像时影响像素沿 x 轴定位的值
         * @param d 缩放或旋转图像时影响像素沿 y 轴定位的值
         * @param tx 沿 x 轴平移每个点的距离
         * @param ty 沿 y 轴平移每个点的距离
         * @returns 矩阵自身
         * @version Egret 2.4
         * @platform Web,Native
         */
        prepend(a: number, b: number, c: number, d: number, tx: number, ty: number): Matrix;
        
        /**
         * @language zh_CN
         * 后置矩阵
         * @param a 缩放或旋转图像时影响像素沿 x 轴定位的值
         * @param b 缩放或旋转图像时影响像素沿 y 轴定位的值
         * @param c 缩放或旋转图像时影响像素沿 x 轴定位的值
         * @param d 缩放或旋转图像时影响像素沿 y 轴定位的值
         * @param tx 沿 x 轴平移每个点的距离
         * @param ty 沿 y 轴平移每个点的距离
         * @returns 矩阵自身
         * @version Egret 2.4
         * @platform Web,Native
         */
        append(a: number, b: number, c: number, d: number, tx: number, ty: number): Matrix;
        
        /**
         * @language zh_CN
         * 如果给定预转换坐标空间中的点，则此方法返回发生转换后该点的坐标。
         * 与使用 transformPoint() 方法应用的标准转换不同，deltaTransformPoint() 方法的转换不考虑转换参数 tx 和 ty。
         * @param point 想要获得其矩阵转换结果的点
         * @returns 由应用矩阵转换所产生的点
         * @version Egret 2.4
         * @platform Web,Native
         */
        deltaTransformPoint(point: Point): Point;
        
        /**
         * @language zh_CN
         * 返回将 Matrix 对象表示的几何转换应用于指定点所产生的结果。
         * @returns 一个字符串，它包含 Matrix 对象的属性值：a、b、c、d、tx 和 ty。
         * @version Egret 2.4
         * @platform Web,Native
         */
        toString(): string;
        
        /**
         * @language zh_CN
         * 包括用于缩放、旋转和转换的参数。当应用于矩阵时，该方法会基于这些参数设置矩阵的值。
         * @param scaleX 水平缩放所用的系数
         * @param scaleY 垂直缩放所用的系数
         * @param rotation 旋转量（以弧度为单位）
         * @param tx 沿 x 轴向右平移（移动）的像素数
         * @param ty 沿 y 轴向下平移（移动）的像素数
         * @version Egret 2.4
         * @platform Web,Native
         */
        createBox(scaleX: number, scaleY: number, rotation?: number, tx?: number, ty?: number): void;
        
        /**
         * @language zh_CN
         * 创建 Graphics 类的 beginGradientFill() 和 lineGradientStyle() 方法所需的矩阵的特定样式。
         * 宽度和高度被缩放为 scaleX/scaleY 对，而 tx/ty 值偏移了宽度和高度的一半。
         * @param width 渐变框的宽度
         * @param height 渐变框的高度
         * @param rotation 旋转量（以弧度为单位）
         * @param tx 沿 x 轴向右平移的距离（以像素为单位）。此值将偏移 width 参数的一半
         * @param ty 沿 y 轴向下平移的距离（以像素为单位）。此值将偏移 height 参数的一半
         * @version Egret 2.4
         * @platform Web,Native
         */
        createGradientBox(width: number, height: number, rotation?: number, tx?: number, ty?: number): void;
        /**
         * @private
         */
        $transformBounds(bounds: Rectangle): void;
        /**
         * @private
         */
        private getDeterminant();
        /**
         * @private
         */
        $getScaleX(): number;
        /**
         * @private
         */
        $getScaleY(): number;
        /**
         * @private
         */
        $getSkewX(): number;
        /**
         * @private
         */
        $getSkewY(): number;
        /**
         * @private
         */
        $updateScaleAndRotation(scaleX: number, scaleY: number, skewX: number, skewY: number): void;
        /**
         * @private
         * target = other * this
         */
        $preMultiplyInto(other: Matrix, target: Matrix): void;
    }
    /**
     * @private
     * 仅供框架内复用，要防止暴露引用到外部。
     */
    var $TempMatrix: Matrix;
}
declare module egret {
}
declare module egret {
    /**
     * @private
     */
    var $locale_strings: any;
    /**
     * @private
     */
    var $language: string;
}
declare module egret.sys {
    /**
     * @private
     * 全局多语言翻译函数
     * @param code 要查询的字符串代码
     * @param args 替换字符串中{0}标志的参数列表
     * @returns 返回拼接后的字符串
     */
    function tr(code: number, ...args: any[]): string;
}
declare module egret {
}
/**
 * @version Egret 2.4
 * @platform Web,Native
 * @includeExample egret/localStorage/localStorage.ts
 */
declare module egret.localStorage {
    
    /**
     * @language zh_CN
     * 读取数据
     * @param key {string} 要读取的键名称
     * @version Egret 2.4
     * @platform Web,Native
     */
    var getItem: (key: string) => string;
    
    /**
     * @language zh_CN
     * 保存数据
     * @param key {string} 要保存的键名称
     * @param value {string} 要保存的值
     * @returns {boolean} 数据保存是否成功
     * @version Egret 2.4
     * @platform Web,Native
     */
    var setItem: (key: string, value: string) => boolean;
    
    /**
     * @language zh_CN
     * 删除数据
     * @param key {string} 要删除的键名称
     * @version Egret 2.4
     * @platform Web,Native
     */
    var removeItem: (key: string) => void;
    
    /**
     * @language zh_CN
     * 将所有数据清空
     * @version Egret 2.4
     * @platform Web,Native
     */
    var clear: () => void;
}
declare module egret.sys {
    /**
     * @private
     * @param channel
     */
    function $pushSoundChannel(channel: SoundChannel): void;
    /**
     * @private
     * @param channel
     */
    function $popSoundChannel(channel: SoundChannel): boolean;
}
declare module egret {
    
    /**
     * @language zh_CN
     * Sound 允许您在应用程序中使用声音。使用 Sound 类可以创建 Sound 对象、将外部音频文件加载到该对象并播放该文件。
     * 可通过 SoundChannel 对声音执行更精细的控制，如控制音量和监控播放进度。
     * @see http://edn.egret.com/cn/docs/page/156 音频系统
     *
     * @event egret.Event.COMPLETE 音频加载完成时抛出
     * @event egret.IOErrorEvent.IO_ERROR 音频加载失败时抛出
     * @version Egret 2.4
     * @platform Web,Native
     * @includeExample egret/media/Sound.ts
     */
    interface Sound extends EventDispatcher {
        
        /**
         * @language zh_CN
         * 启动从指定 URL 加载外部音频文件的过程。
         * @param url 需要加载的音频文件URL
         * @version Egret 2.4
         * @platform Web,Native
         */
        load(url: string): void;
        
        /**
         * @language zh_CN
         * 生成一个新的 SoundChannel 对象来播放该声音。此方法返回 SoundChannel 对象，访问该对象可停止声音调整音量。
         * @param startTime 应开始播放的初始位置（以秒为单位），默认值是 0
         * @param loops 播放次数，默认值是 0，循环播放。 大于 0 为播放次数，如 1 为播放 1 次；小于等于 0，为循环播放。
         * @version Egret 2.4
         * @platform Web,Native
         */
        play(startTime?: number, loops?: number): SoundChannel;
        
        /**
         * @language zh_CN
         * 关闭该流，从而停止所有数据的下载。
         * @version Egret 2.4
         * @platform Web,Native
         */
        close(): void;
        
        /**
         * @language zh_CN
         * 类型，默认为 egret.Sound.EFFECT。
         * 在 native 和 runtime 环境下，背景音乐同时只能播放一个，音效长度尽量不要太长。
         * @version Egret 2.4
         * @platform Web,Native
         */
        type: string;
        
        /**
         * @language zh_CN
         * 当前声音的长度（以秒为单位）。
         * @version Egret 2.4
         * @platform Web,Native
         * @readOnly
         */
        length: number;
    }
    /**
     * @copy egret.Sound
     */
    var Sound: {
        
        /**
         * @language zh_CN
         * 创建 Sound 对象、将外部音频文件加载到该对象并播放该文件
         * @param url 需要加载的音频文件URL,如果指定了 url, Sound会立即开始加载指定的媒体文件
         * @version Egret 2.4
         * @platform Web,Native
         */
        new (): Sound;
        
        /**
         * @language zh_CN
         * 背景音乐
         * @version Egret 2.4
         * @platform Web,Native
         */
        MUSIC: string;
        
        /**
         * @language zh_CN
         * 音效
         * @version Egret 2.4
         * @platform Web,Native
         */
        EFFECT: string;
    };
}
declare module egret {
    
    /**
    * @language zh_CN
     * SoundChannel 类控制应用程序中的声音。每个声音均分配给一个声道，而且应用程序可以具有混合在一起的多个声道。
     * SoundChannel 类包含 stop() 方法、用于设置音量和监视播放进度的属性。
     *
     * @event egret.Event.SOUND_COMPLETE 音频最后一次播放完成时抛出
     * @version Egret 2.4
     * @platform Web,Native
     * @includeExample egret/media/Sound.ts
    */
    interface SoundChannel extends IEventDispatcher {
        
        /**
         * @language zh_CN
         * 音量范围从 0（静音）至 1（最大音量）。
         * @version Egret 2.4
         * @platform Web,Native
         */
        volume: number;
        
        /**
         * @language zh_CN
         * 当播放声音时，position 属性表示声音文件中当前播放的位置（以秒为单位）
         * @version Egret 2.4
         * @platform Web,Native
         * @readOnly
         */
        position: number;
        
        /**
         * @language zh_CN
         * 停止在该声道中播放声音。
         * @version Egret 2.4
         * @platform Web,Native
         */
        stop(): void;
    }
}
declare module egret {
    
    /**
     * @language zh_CN
     * Video 允许您在应用程序中使用视频。使用 Video 类可以创建 Video 对象、将外部视频文件加载到该对象并播放该文件。<br/>
     * 注意: 在大多数移动设备中，视频是强制全屏播放的，所以你可以直接调用 play() 方法全屏播放视频，不用将它绘制在Stage中。
     * @see http://edn.egret.com/cn/docs/page/657 视频系统
     *
     * @param url 要播放的视频的URL，如果url不为空，Video会立即加载这个视频
     *
     * @event egret.Event.COMPLETE 视频加载完成时抛出
     * @event egret.Event.ENDED 视频播放完成时抛出
     * @event egret.IOErrorEvent.IO_ERROR 视频加载失败时触发
     * @version Egret 2.4
     * @platform Web
     * @includeExample egret/media/Video.ts
     */
    interface Video extends DisplayObject {
        
        /**
         * @language zh_CN
         * 启动从指定 URL 加载外部视频文件的过程。
         * @param url 需要加载的视频文件URL
         * @version Egret 2.4
         * @platform Web,Native
         */
        load(url: string): void;
        
        /**
         * @language zh_CN
         * 播放该视频
         * @param startTime 应开始播放的初始位置（以秒为单位），默认值是视频上次结束的位置
         * @param loop 是否需要循环播放，默认值是 false
         * @param fullscreen 是否需要全屏播放，默认值是 false
         * @version Egret 2.4
         * @platform Web,Native
         */
        play(startTime?: number, loop?: boolean): any;
        
        /**
         * @language zh_CN
         * 关闭该流，从而停止所有数据的下载。
         * @version Egret 2.4
         * @platform Web,Native
         */
        close(): void;
        
        /**
         * @language zh_CN
         * 想要播放的视频的URL
         * @version Egret 2.4
         * @platform Web,Native
         */
        src: string;
        
        /**
         * @language zh_CN
         * 视频加载前，或者在不支持将 video 画在 canvas 的设备上，想要显示的视频截图地址。
         * @version Egret 2.4
         * @platform Web,Native
         */
        poster: string;
        
        /**
         * @language zh_CN
         * 是否全屏播放这个视频（默认值是 true）。
         * 目前移动端 web 只支持全屏。
         * @version Egret 2.4
         * @platform Web,Native
         */
        fullscreen: boolean;
        
        /**
         * @language zh_CN
         * 音量范围从 0（静音）至 1（最大音量）。
         * @version Egret 2.4
         * @platform Web,Native
         */
        volume: number;
        
        /**
         * @language zh_CN
         * 当播放视频时，position 属性表示视频文件中当前播放的位置（以秒为单位）
         * @version Egret 2.4
         * @platform Web,Native
         */
        position: number;
        
        /**
         * @language zh_CN
         * 暂停播放。
         * @version Egret 2.4
         * @platform Web,Native
         */
        pause(): void;
        
        /**
         * @language zh_CN
         *  获取视频的 bitmapData, 你可以将视频绘制到舞台上。
         * 注意： 在大多数移动设备中，视频是全屏播放的，所以你可以直接调用 play() 方法全屏播放视频，不用将它绘制在Stage中。
         * @version Egret 2.4
         * @platform Web
         */
        bitmapData?: BitmapData;
        
        /**
         * @language zh_CN
         * 当前视频是否在暂停状态。
         * @version Egret 2.4
         * @platform Web,Native
         * @readOnly
         */
        paused: boolean;
        
        /**
         * @language zh_CN
         * 当前视频的长度（以秒为单位）。
         * @version Egret 3.0.8
         * @platform Web,Native
         * @readOnly
         */
        length: number;
    }
    /**
     * @copy egret.Video
     */
    var Video: {
        new (url?: string): Video;
    };
}
declare module egret_native {
    var nativeType: string;
    /**
     * 游戏启动
     * @private
     */
    function startGame(): void;
    function loglevel(logType: any): void;
    function callRender(): void;
    function getVersion(): any;
    function setScreenCanvas(canvas: Canvas): void;
    function setFrameRate(frameRate: number): void;
    function onTouchesBegin(num: number, ids: Array<any>, xs_array: Array<any>, ys_array: Array<any>): any;
    function onTouchesMove(num: number, ids: Array<any>, xs_array: Array<any>, ys_array: Array<any>): any;
    function onTouchesEnd(num: number, ids: Array<any>, xs_array: Array<any>, ys_array: Array<any>): any;
    function onTouchesCancel(num: number, ids: Array<any>, xs_array: Array<any>, ys_array: Array<any>): any;
    /**
     * 启动主循环
     * @param callback 主循环回调函数
     * @param thisObject
     */
    function executeMainLoop(callback: Function, thisObject: any): void;
    function pauseApp(): void;
    function resumeApp(): void;
    function readXML(filepath: string): any;
    function xmlStr2JsonStr(text: string): any;
    function isFileExists(filepath: string): boolean;
    function isRecordExists(filepath: string): boolean;
    function readFileSync(filepath: string, type?: string): any;
    function readResourceFileSync(filepath: string): any;
    function readUpdateFileSync(filepath: string): any;
    function deleteUpdateFile(filepath: string): void;
    function readFileAsync(filepath: string, promise: egret.PromiseObject, type?: string): any;
    function writeFileSync(filepath: string, fileContent: string): any;
    function requireHttpSync(url: string, callback: Function): void;
    function requireHttp(url: string, param: any, callback: Function): void;
    function sendInfoToPlugin(info: string): void;
    function receivedPluginInfo(info: string): void;
    function loadRecord(filepath: string): string;
    function saveRecord(filepath: string, fileContent: string): void;
    function getOption(type: string): string;
    module Audio {
        function preloadBackgroundMusic(path: string): void;
        function playBackgroundMusic(path: string, loop: boolean): void;
        function setBackgroundMusicVolume(value: number): void;
        function setEffectsVolume(value: number): void;
        function getBackgroundMusicVolume(): number;
        function getEffectsVolume(): number;
        function stopBackgroundMusic(isRelease: boolean): void;
        function preloadEffect(path: string): void;
        function preloadEffectAsync(path: string, promise: egret.PromiseObject): void;
        function playEffect(path: string, loop: boolean): void;
        function unloadEffect(path: string): void;
        function stopEffect(effectId: number): void;
        function pauseBackgroundMusic(): void;
        function pauseAllEffects(): void;
        function resumeBackgroundMusic(): void;
        function resumeAllEffects(): void;
    }
    function download(url: string, savePath: string, promise: any): void;
    module Graphics {
        function clearScreen(r: number, g: number, b: number): void;
        function drawImage(texture: any, sourceX: any, sourceY: any, sourceWidth: any, sourceHeight: any, destX: any, destY: any, destWidth: any, destHeight: any): void;
        function drawImageScale9(texture: any, sourceX: any, sourceY: any, sourceWidth: any, sourceHeight: any, destX: any, destY: any, destWidth: any, destHeight: any, x: any, y: any, width: any, height: any): boolean;
        function setTransform(a: number, b: number, c: number, d: number, tx: number, ty: number): void;
        function setGlobalAlpha(alpha: number): void;
        function pushClip(x: number, y: number, w: number, h: number): void;
        function popClip(): void;
        function setGlobalColorTransform(colorTransformMatrix: Array<number>): void;
        function setGlobalColorTransformEnabled(bool: boolean): void;
        function setGlobalShader(filterData: any): void;
        function lineStyle(thickness: number, color: number): void;
        function lineTo(x: number, y: number): void;
        function moveTo(x: number, y: number): void;
        function beginFill(color: number, alpha: number): void;
        function endFill(): void;
        function setBlendArg(src: number, des: number): void;
        function setTextureScaleFactor(value: number): void;
    }
    module Label {
        function createLabel(font: string, size: number, defaultString: string, defaultStroke: number): void;
        function setTextColor(color: number): void;
        function setStrokeColor(color: number): void;
        function drawText(text: string, x: number, y: number): void;
        function setTextAlignment(type: string): void;
        function getTextSize(text: string): Array<number>;
    }
    module EGTXML {
        function readXML(filepath: string): void;
    }
    module Texture {
        function create(filePath: string): any;
        function addTexture(filePath: string): any;
        function addTextureAsyn(filePath: string, promise: any): any;
        function addTextureUnsyn(filePath: string, promise: any): any;
        function removeTexture(filePath: string): void;
    }
    module TextInputOp {
        function setKeybordOpen(isOpen: boolean, jsonConfig?: Object): void;
        function isFullScreenKeyBoard(): boolean;
        function setInputTextMaxLenght(value: number): void;
    }
    function EGT_TextInput(text: string): void;
    function EGT_keyboardFinish(): void;
    function EGT_deleteBackward(): void;
    function EGT_keyboardDidHide(): void;
    function EGT_keyboardDidShow(): void;
    function EGT_getTextEditerContentText(): string;
    module EGTView {
        function getFrameWidth(): number;
        function getFrameHeight(): number;
        function setVisibleRect(x: number, y: number, w: number, h: number): number;
        function setDesignSize(w: number, h: number): number;
    }
    /**
     * @private
     */
    class RenderTexture {
        constructor(width: number, height: number);
        begin(): any;
        end(): any;
        dispose(): any;
        toDataURL(type: any): any;
        saveToFile(type: string, filePath: string): any;
    }
    module rastergl {
        function arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void;
        function quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
        function lineTo(x: number, y: number): void;
        function fill(fillRule?: string): void;
        function closePath(): void;
        function rect(x: number, y: number, w: number, h: number): void;
        function moveTo(x: number, y: number): void;
        function fillRect(x: number, y: number, w: number, h: number): void;
        function bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;
        function stroke(): void;
        function strokeRect(x: number, y: number, w: number, h: number): void;
        function beginPath(): void;
        function arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void;
        function transform(m11: number, m12: number, m21: number, m22: number, dx: number, dy: number): void;
        function translate(x: number, y: number): void;
        function scale(x: number, y: number): void;
        function rotate(angle: number): void;
        function save(): void;
        function restore(): void;
        function createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient;
        function createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): CanvasGradient;
        /**
         * @private
         */
        var lineWidth: number;
        /**
         * @private
         */
        var strokeStyle: any;
        /**
         * @private
         */
        var fillStyle: any;
    }
    module Game {
        function listResource(root: any, promise: any): any;
        function listUpdate(root: any, promise: any): any;
    }
    /**
     * @private
     */
    class RenderContext {
        clearScreen(r: number, g: number, b: number): void;
        drawImage(texture: any, sourceX: any, sourceY: any, sourceWidth: any, sourceHeight: any, destX: any, destY: any, destWidth: any, destHeight: any): void;
        setTransform(a: number, b: number, c: number, d: number, tx: number, ty: number): void;
        setGlobalAlpha(alpha: number): void;
        pushClip(x: number, y: number, w: number, h: number): void;
        popClip(): void;
    }
    /**
     * @private
     */
    class Canvas {
        constructor(width: number, height: number);
        width: number;
        height: number;
        getContext(type: string): RenderContext;
    }
}
declare module egret {
    /**
     * @private
     * @version Egret 2.4
     * @platform Web,Native
     */
    class PromiseObject {
        /**
         * @private
         */
        private static promiseObjectList;
        /**
         * @version Egret 2.4
         * @platform Web,Native
         */
        onSuccessFunc: Function;
        /**
         * @version Egret 2.4
         * @platform Web,Native
         */
        onSuccessThisObject: any;
        /**
         * @version Egret 2.4
         * @platform Web,Native
         */
        onErrorFunc: Function;
        /**
         * @version Egret 2.4
         * @platform Web,Native
         */
        onErrorThisObject: any;
        /**
         * @version Egret 2.4
         * @platform Web,Native
         */
        downloadingSizeFunc: Function;
        /**
         * @version Egret 2.4
         * @platform Web,Native
         */
        downloadingSizeThisObject: any;
        /**
         * @version Egret 2.4
         * @platform Web,Native
         */
        onResponseHeaderFunc: Function;
        /**
         * @version Egret 2.4
         * @platform Web,Native
         */
        onResponseHeaderThisObject: any;
        /**
         * @version Egret 2.4
         * @platform Web,Native
         */
        constructor();
        /**
         *
         * @version Egret 2.4
         * @platform Web,Native
         */
        static create(): any;
        /**
         * @private
         *
         * @param args
         */
        private onSuccess(...args);
        /**
         * @private
         *
         * @param args
         */
        private onError(...args);
        /**
         * @private
         *
         * @param args
         */
        private downloadingSize(...args);
        /**
         * @private
         *
         * @param args
         */
        private onResponseHeader(...args);
        /**
         * @private
         *
         */
        private destroy();
    }
}
declare module egret {
    
    /**
     * @language zh_CN
     * HttpRequestMethod 类提供了一些值，这些值可指定在将数据发送到服务器时，
     * HttpRequest 对象应使用 POST 方法还是 GET 方法。
     * @see egret.HttpRequest
     * @version Egret 2.4
     * @platform Web,Native
     */
    class HttpMethod {
        
        /**
         * @language zh_CN
         * 表示 HttpRequest 对象是一个 GET。
         * @version Egret 2.4
         * @platform Web,Native
         */
        static GET: string;
        
        /**
         * @language zh_CN
         * 表示 HttpRequest 对象是一个 POST。
         * @version Egret 2.4
         * @platform Web,Native
         */
        static POST: string;
    }
}
declare module egret {
    
    /**
     * @language zh_CN
     * HttpRequest 类以文本或二进制数据的形式从 URL 下载数据。
     * HttpRequest 对象会先从 URL 中下载所有数据，然后才将数据用于应用程序中的代码。它会发出有关下载进度的通知，
     * 通过 bytesLoaded 和 bytesTotal 属性以及已调度的事件，可以监视下载进度。
     * @event egret.Event.COMPLETE 加载完成
     * @event egret.Event.IO_ERROR 加载失败
     * @event egret.ProgressEvent.PROGRESS 加载进度，可通过event.bytesLoaded和event.bytesTotal统计进度信息。
     * @see egret.HttpMethod
     * @see egret.HttpResponseType
     * @includeExample egret/net/HttpRequestExample.ts
     * @version Egret 2.4
     * @platform Web,Native
     */
    interface HttpRequest extends EventDispatcher {
        
        /**
         * @language zh_CN
         * 本次请求返回的数据，数据类型根据 responseType 设置的值确定。
         * @readOnly
         * @version Egret 2.4
         * @platform Web,Native
         */
        response: any;
        
        /**
         * @language zh_CN
         * 设置返回的数据格式为文本（HttpResponseType.TEXT）还是二进制数据（HttpResponseType.ArrayBuffer）<br/>
         * 注意：若尝试设置此属性为一个非法的值，运行时将使用HttpResponseType.TEXT。
         * @default egret.HttpResponseType.TEXT
         * @version Egret 2.4
         * @platform Web,Native
         */
        responseType: string;
        
        /**
         * @language zh_CN
         * 表明在进行跨站(cross-site)的访问控制(Access-Control)请求时，是否使用认证信息(例如cookie或授权的header)。(这个标志不会影响同站的请求)
         * @default false
         * @version Egret 2.4
         * @platform Web,Native
         */
        withCredentials: boolean;
        
        /**
         * @language zh_CN
         * 初始化一个请求.<br/>
         * 注意: 若在已经发出请求的对象上调用此方法，相当于立即调用abort().
         * @param url 该请求所要访问的URL该请求所要访问的URL
         * @param method 请求所使用的HTTP方法， 请使用 HttpMethod 定义的枚举值.
         * @see egret.HttpMethod
         * @version Egret 2.4
         * @platform Web,Native
         */
        open(url: string, method?: string): void;
        
        /**
         * @language zh_CN
         * 发送请求.
         * @param data 需要发送的数据
         * @version Egret 2.4
         * @platform Web,Native
         */
        send(data?: any): void;
        
        /**
         * @language zh_CN
         * 如果请求已经被发送,则立刻中止请求.
         * @version Egret 2.4
         * @platform Web,Native
         */
        abort(): void;
        
        /**
         * @language zh_CN
         * 返回所有响应头信息(响应头名和值), 如果响应头还没接受,则返回"".
         * @version Egret 2.4
         * @platform Web,Native
         */
        getAllResponseHeaders(): string;
        
        /**
         * @language zh_CN
         * 给指定的HTTP请求头赋值.在这之前,您必须确认已经调用 open() 方法打开了一个url.
         * @param header 将要被赋值的请求头名称.
         * @param value 给指定的请求头赋的值.
         * @version Egret 2.4
         * @platform Web,Native
         */
        setRequestHeader(header: string, value: string): void;
        
        /**
         * @language zh_CN
         * 返回指定的响应头的值, 如果响应头还没被接受,或该响应头不存在,则返回"".
         * @param header 要返回的响应头名称
         * @version Egret 2.4
         * @platform Web,Native
         */
        getResponseHeader(header: string): string;
    }
    
    /**
     * @language zh_CN
     * 创建一个 HttpRequest 实例。
     * @version Egret 2.4
     * @platform Web,Native
     */
    var HttpRequest: {
        new (): HttpRequest;
    };
}
declare module egret {
    
    /**
     * @language zh_CN
     * URLLoaderDataFormat 类提供了一些用于指定如何接收已下载数据的值。
     * @see egret.HttpRequest
     * @version Egret 2.4
     * @platform Web,Native
     */
    class HttpResponseType {
        
        /**
         * @language zh_CN
         * 返回字符串。HttpRequest.responseType属性的默认值。
         * @version Egret 2.4
         * @platform Web,Native
         */
        static TEXT: string;
        
        /**
         * @language zh_CN
         * 返回二进制的ArrayBuffer对象。
         * @version Egret 2.4
         * @platform Web,Native
         */
        static ARRAY_BUFFER: string;
    }
}
declare module egret {
    
    /**
     * @language zh_CN
     * ImageLoader 类可用于加载图像（JPG、PNG 或 GIF）文件。使用 load() 方法来启动加载。被加载的图像对象数据将存储在 ImageLoader.data 属性上 。
     * @event egret.Event.COMPLETE 加载完成
     * @event egret.IOErrorEvent.IO_ERROR 加载失败
     * @see egret.HttpRequest
     * @version Egret 2.4
     * @platform Web,Native
     * @includeExample egret/net/ImageLoaderExample.ts
     * @see http://edn.egret.com/cn/docs/page/590 加载位图文件
     */
    interface ImageLoader extends EventDispatcher {
        
        /**
         * @language zh_CN
         * 使用 load() 方法加载成功的 BitmapData 图像数据。
         * @default null
         * @version Egret 2.4
         * @platform Web,Native
         */
        data: BitmapData;
        
        /**
         * @language zh_CN
         * 当从其他站点加载一个图片时，指定是否启用跨域资源共享(CORS)，默认值为null。<br/>
         * 可以设置为"anonymous","use-credentials"或null,设置为其他值将等同于"anonymous"。
         * @version Egret 2.4
         * @platform Web,Native
         */
        crossOrigin: string;
        
        /**
         * @language zh_CN
         * 启动一次图像加载。<br/>
         * 注意：若之前已经调用过加载请求，重新调用 load() 将终止先前的请求，并开始新的加载。
         * @param url 要加载的图像文件的地址。
         * @version Egret 2.4
         * @platform Web,Native
         */
        load(url: string): void;
    }
    
    /**
     * @language zh_CN
     * 创建一个 ImageLoader 实例
     * @version Egret 2.4
     * @platform Web,Native
     */
    var ImageLoader: {
        
        /**
         * @language zh_CN
         * 构造函数
         * @version Egret 2.4
         * @platform Web,Native
         */
        new (): ImageLoader;
        
        /**
         * @language zh_CN
         * 指定是否启用跨域资源共享,如果ImageLoader实例有设置过crossOrigin属性将使用设置的属性
         * @version Egret 2.5.7
         * @platform Web,Native
         */
        crossOrigin: string;
    };
}
declare module egret.sys {
    /**
     * @private
     * 脏矩形计算工具类
     */
    class DirtyRegion {
        constructor(root: DisplayObject);
        /**
         * @private
         */
        private root;
        /**
         * @private
         */
        private dirtyList;
        /**
         * @private
         */
        private hasClipRect;
        /**
         * @private
         */
        private clipWidth;
        /**
         * @private
         */
        private clipHeight;
        /**
         * @private
         */
        private clipArea;
        /**
         * @private
         */
        private clipRectChanged;
        /**
         * @private
         * 设置剪裁边界，超过边界的节点将跳过绘制。
         */
        setClipRect(width: number, height: number): void;
        /**
         * @private
         * 添加一个脏矩形区域，返回是否添加成功，当矩形为空或者在屏幕之外时返回false。
         */
        addRegion(target: Region): boolean;
        /**
         * @private
         */
        clear(): void;
        /**
         * @private
         * 获取最终的脏矩形列表
         */
        getDirtyRegions(): Region[];
        /**
         * @private
         * 合并脏矩形列表
         */
        private mergeDirtyList(dirtyList);
        private $dirtyRegionPolicy;
        setDirtyRegionPolicy(policy: string): void;
    }
}
declare module egret.sys {
    /**
     * @private
     * 显示列表
     */
    class DisplayList extends HashObject implements sys.Renderable {
        /**
         * 创建一个DisplayList对象，若内存不足或无法创建RenderBuffer，将会返回null。
         */
        static create(target: DisplayObject): DisplayList;
        /**
         * @private
         * 创建一个DisplayList对象
         */
        constructor(root: DisplayObject);
        private isStage;
        /**
         * 位图渲染节点
         */
        $renderNode: RenderNode;
        /**
         * @private
         * 获取渲染节点
         */
        $getRenderNode(): sys.RenderNode;
        /**
         * @private
         * 更新对象在舞台上的显示区域和透明度,返回显示区域是否发生改变。
         */
        $update(): boolean;
        /**
         * @private
         */
        renderBuffer: RenderBuffer;
        /**
         * @private
         */
        offsetX: number;
        /**
         * @private
         */
        offsetY: number;
        /**
         * @private
         */
        private offsetMatrix;
        /**
         * @private
         * 显示列表根节点
         */
        root: DisplayObject;
        /**
         * @private
         */
        isDirty: boolean;
        needUpdateRegions: boolean;
        /**
         * @private
         * 设置剪裁边界，不再绘制完整目标对象，画布尺寸由外部决定，超过边界的节点将跳过绘制。
         */
        setClipRect(width: number, height: number): void;
        /**
         * @private
         * 显示对象的渲染节点发生改变时，把自身的IRenderable对象注册到此列表上。
         */
        private dirtyNodes;
        /**
         * @private
         */
        private dirtyNodeList;
        /**
         * @private
         * 标记一个节点需要重新渲染
         */
        markDirty(node: Renderable): void;
        /**
         * @private
         */
        private dirtyList;
        /**
         * @private
         */
        private dirtyRegion;
        /**
         * @private
         * 更新节点属性并返回脏矩形列表。
         */
        updateDirtyRegions(): Region[];
        /**
         * @private
         * 绘制根节点显示对象到目标画布，返回draw的次数。
         */
        drawToSurface(): number;
        /**
         * @private
         */
        private sizeChanged;
        /**
         * @private
         * 改变画布的尺寸，由于画布尺寸修改会清空原始画布。所以这里将原始画布绘制到一个新画布上，再与原始画布交换。
         */
        changeSurfaceSize(): void;
        setDirtyRegionPolicy(policy: string): void;
    }
}
declare module egret {
    
    /**
     * @language zh_CN
     * egret工程入口函数
     * @param options 一个可选对象，包含初始化Egret引擎需要的参数。
     */
    function runEgret(options?: {
        renderMode?: string;
        screenAdapter?: sys.IScreenAdapter;
    }): void;
    
    /**
     * @language zh_CN
     * 刷新屏幕显示
     */
    function updateAllScreens(): void;
}
declare module egret {
    /**
     * @private
     */
    interface FPSDisplay extends DisplayObject {
        /**
         * 更新FPS信息
         */
        update(datas: FPSData): void;
        /**
         * 插入一条日志信息
         */
        updateInfo(info: string): void;
    }
    /**
     * @private
     */
    var FPSDisplay: {
        new (stage: Stage, showFPS: boolean, showLog: boolean, logFilter: string, styles: Object): FPSDisplay;
    };
}
/**
 * @private
 */
interface FPSData extends Object {
    fps: number;
    draw: number;
    dirty: number;
    costTicker: number;
    costDirty: number;
    costRender: number;
}
declare module egret.sys {
    var $TempStage: egret.Stage;
    /**
     * @private
     * Egret播放器
     */
    class Player extends HashObject {
        /**
         * @private
         * 实例化一个播放器对象。
         */
        constructor(buffer: RenderBuffer, stage: Stage, entryClassName: string);
        /**
         * @private
         */
        private createDisplayList(stage, buffer);
        /**
         * @private
         */
        private screenDisplayList;
        /**
         * @private
         * 入口类的完整类名
         */
        private entryClassName;
        /**
         * @private
         * 舞台引用
         */
        stage: Stage;
        /**
         * @private
         * 入口类实例
         */
        private root;
        /**
         * @private
         */
        private isPlaying;
        /**
         * @private
         * 启动播放器
         */
        start(): void;
        /**
         * @private
         *
         */
        private initialize();
        /**
         * @private
         * 停止播放器，停止后将不能重新启动。
         */
        stop(): void;
        /**
         * @private
         * 暂停播放器，后续可以通过调用start()重新启动播放器。
         */
        pause(): void;
        /**
         * @private
         * 渲染屏幕
         */
        $render(triggerByFrame: boolean, costTicker: number): void;
        /**
         * @private
         *
         */
        private callLaters();
        /**
         * @private
         *
         */
        private callLaterAsyncs();
        /**
         * @private
         * 更新舞台尺寸
         * @param stageWidth 舞台宽度（以像素为单位）
         * @param stageHeight 舞台高度（以像素为单位）
         */
        updateStageSize(stageWidth: number, stageHeight: number): void;
        /**
         * @private
         * 显示FPS。
         */
        displayFPS: (showFPS: boolean, showLog: boolean, logFilter: string, fpsStyles: Object) => void;
        /**
         * @private
         */
        private showFPS;
        /**
         * @private
         */
        private showLog;
        /**
         * @private
         */
        private fpsDisplay;
        /**
         * @private
         * 是否显示脏矩形重绘区。
         */
        showPaintRect: (value: boolean) => void;
        /**
         * @private
         */
        private drawDirtyRect;
        /**
         * @private
         */
        private _showPaintRect;
        /**
         * @private
         */
        private stageDisplayList;
        /**
         * @private
         */
        private paintList;
        /**
         * @private
         */
        private drawPaintRect;
    }
    /**
     * @private
     */
    var $logToFPS: (info: string) => void;
}
/**
 * @private
 */
interface PlayerOption {
    /**
     * 入口类完整类名
     */
    entryClassName?: string;
    /**
     * 默认帧率
     */
    frameRate?: number;
    /**
     * 屏幕适配模式
     */
    scaleMode?: string;
    /**
     * 初始内容宽度
     */
    contentWidth?: number;
    /**
     * 初始内容高度
     */
    contentHeight?: number;
    /**
     * 屏幕方向
     */
    orientation?: string;
    /**
     * 是否显示重绘区域
     */
    showPaintRect?: boolean;
    /**
     * 显示FPS
     */
    showFPS?: boolean;
    /**
     *
     */
    fpsStyles?: Object;
    /**
     * 显示日志
     */
    showLog?: boolean;
    /**
     * 过滤日志的正则表达式
     */
    logFilter?: string;
    /**
     *
     */
    maxTouches?: number;
    /**
     *
     */
    textureScaleFactor?: number;
}
declare module egret.sys {
    /**
     * @private
     */
    class Region {
        /**
         * @private
         * 释放一个Region实例到对象池
         */
        static release(region: Region): void;
        /**
         * @private
         * 从对象池中取出或创建一个新的Region对象。
         * 建议对于一次性使用的对象，均使用此方法创建，而不是直接new一个。
         * 使用完后调用对应的release()静态方法回收对象，能有效减少对象创建数量造成的性能开销。
         */
        static create(): Region;
        /**
         * @private
         */
        minX: number;
        /**
         * @private
         */
        minY: number;
        /**
         * @private
         */
        maxX: number;
        /**
         * @private
         */
        maxY: number;
        /**
         * @private
         */
        width: number;
        /**
         * @private
         */
        height: number;
        /**
         * @private
         */
        area: number;
        /**
         * @private
         * 是否发生移动
         */
        moved: boolean;
        /**
         * @private
         */
        setTo(minX: number, minY: number, maxX: number, maxY: number): Region;
        /**
         * @private
         * 把所有值都取整
         */
        intValues(): void;
        /**
         * @private
         */
        updateArea(): void;
        /**
         * @private
         * 注意！由于性能优化，此方法不判断自身是否为空，必须在外部确认自身和目标区域都不为空再调用合并。否则结果始终从0，0点开始。
         */
        union(target: Region): void;
        /**
         * @private
         * 注意！由于性能优化，此方法不判断自身是否为空，必须在外部确认自身和目标区域都不为空再调用合并。否则结果始终从0，0点开始。
         */
        intersect(target: Region): void;
        /**
         * @private
         */
        private setEmpty();
        /**
         * @private
         * 确定此 Region 对象是否为空。
         */
        isEmpty(): boolean;
        /**
         * @private
         */
        intersects(target: Region): boolean;
        /**
         * @private
         */
        updateRegion(bounds: Rectangle, matrix: Matrix): void;
    }
}
declare module egret.sys {
    /**
     * 共享的用于碰撞检测的渲染缓冲
     */
    var hitTestBuffer: sys.RenderBuffer;
    /**
     * @private
     * 渲染缓冲
     */
    interface RenderBuffer {
        /**
         * 呈现最终绘图结果的画布。
         * @readOnly
         */
        surface: any;
        /**
         * 渲染上下文。
         * @readOnly
         */
        context: any;
        /**
         * 渲染缓冲的宽度，以像素为单位。
         * @readOnly
         */
        width: number;
        /**
         * 渲染缓冲的高度，以像素为单位。
         * @readOnly
         */
        height: number;
        /**
         * 改变渲染缓冲的大小并清空缓冲区
         * @param width 改变后的宽
         * @param height 改变后的高
         * @param useMaxSize 若传入true，则将改变后的尺寸与已有尺寸对比，保留较大的尺寸。
         */
        resize(width: number, height: number, useMaxSize?: boolean): void;
        /**
         * 改变渲染缓冲为指定大小，但保留原始图像数据
         * @param width 改变后的宽
         * @param height 改变后的高
         * @param offsetX 原始图像数据在改变后缓冲区的绘制起始位置x
         * @param offsetY 原始图像数据在改变后缓冲区的绘制起始位置y
         */
        resizeTo(width: number, height: number, offsetX: number, offsetY: number): void;
        /**
         * 清空并设置裁切区域
         * @param regions 矩形列表
         * @param offsetX 矩形偏移量x
         * @param offsetY 矩形偏移量y
         */
        beginClip(regions: sys.Region[], offsetX?: number, offsetY?: number): void;
        /**
         * 取消上一次设置的clip。
         */
        endClip(): void;
        /**
         * 获取指定坐标的像素
         */
        getPixel(x: number, y: number): number[];
        /**
         * 转换成base64字符串，如果图片（或者包含的图片）跨域，则返回null
         * @param type 转换的类型，如: "image/png","image/jpeg"
         */
        toDataURL(type?: string, ...args: any[]): string;
        /**
         * 清空缓冲区数据
         */
        clear(): void;
        /**
         * 销毁渲染缓冲
         */
        destroy(): void;
        /**
         * 设置脏矩形策略
         */
        setDirtyRegionPolicy(state: string): void;
    }
    var RenderBuffer: {
        /**
         * 创建一个RenderTarget。
         * 注意：若内存不足或创建缓冲区失败，将会抛出错误异常。
         * @param width 渲染缓冲的初始宽
         * @param height 渲染缓冲的初始高
         */
        new (width?: number, height?: number): RenderBuffer;
    };
}
declare module egret.sys {
    /**
     * @private
     */
    interface Renderable extends HashObject {
        /**
         * 获取渲染节点
         */
        $getRenderNode(): RenderNode;
        /**
         * @private
         * 更新对象在舞台上的显示区域和透明度,返回显示区域是否发生改变。
         * 注意：此方法必须在$getRenderNode()被调用之后执行。
         */
        $update(): boolean;
    }
}
declare module egret.sys {
    /**
     * @private
     * 设备屏幕
     */
    interface Screen {
        /**
         * @private
         * 更新屏幕视口尺寸
         */
        updateScreenSize(): any;
        /**
         * @private
         * 更新触摸数量
         */
        updateMaxTouches(): any;
        /**
         * @private
         * 设置分辨率尺寸
         */
        setContentSize(width: number, height: number): any;
    }
}
declare module egret.sys {
    /**
     * @private
     * 屏幕适配器接口，当播放器视口尺寸改变时，屏幕适配器将被用于计算当前对应的舞台显示尺寸。
     */
    interface IScreenAdapter {
        /**
         * @private
         * 计算舞台显示尺寸
         * @param scaleMode 当前的缩放模式
         * @param screenWidth 播放器视口宽度
         * @param screenHeight 播放器视口高度
         * @param contentWidth 初始化内容宽度
         * @param contentHeight 初始化内容高度
         */
        calculateStageSize(scaleMode: string, screenWidth: number, screenHeight: number, contentWidth: number, contentHeight: number): StageDisplaySize;
    }
    /**
     * @private
     * 舞台显示尺寸数据
     */
    interface StageDisplaySize {
        /**
         * @private
         * 舞台宽度
         */
        stageWidth: number;
        /**
         * @private
         * 舞台高度
         */
        stageHeight: number;
        /**
         * @private
         * 显示宽度，若跟舞台宽度不同，将会产生缩放。
         */
        displayWidth: number;
        /**
         * @private
         * 显示高度，若跟舞台高度不同，将会产生缩放。
         */
        displayHeight: number;
    }
    /**
     * @private
     * 屏幕适配器实例，开发者可以通过给这个变量赋值实现了IScreenAdapter接口的实例，从而注入自定义的屏幕适配器。
     */
    var screenAdapter: IScreenAdapter;
    /**
     * @private
     * 屏幕适配器默认实现，开发者可以实现自定义规则的屏幕适配器。并在初始化加载时将适配器的实例赋值给egret.sys.screenAdapter上，从而替换掉默认适配器。
     */
    class DefaultScreenAdapter extends HashObject implements IScreenAdapter {
        /**
         * @private
         */
        constructor();
        /**
         * @private
         * 计算舞台显示尺寸
         * @param scaleMode 当前的缩放模式
         * @param screenWidth 播放器视口宽度
         * @param screenHeight 播放器视口高度
         * @param contentWidth 初始化内容宽度
         * @param contentHeight 初始化内容高度
         */
        calculateStageSize(scaleMode: string, screenWidth: number, screenHeight: number, contentWidth: number, contentHeight: number): StageDisplaySize;
    }
}
declare module egret {
    
    /**
     * @language zh_CN
     * StageScaleMode 类为舞台缩放模式提供值。
     * @version Egret 2.4
     * @platform Web,Native
     * @includeExample egret/player/StageScaleMode.ts
     */
    class StageScaleMode {
        
        /**
         * @language zh_CN
         * 不缩放应用程序内容。即使在更改播放器视口大小时，它仍然保持不变。如果播放器视口比内容小，则可能进行一些裁切。<br/>
         * 在此模式下，舞台尺寸（Stage.stageWidth,Stage.stageHeight）始终跟播放器视口大小保持一致。
         */
        static NO_SCALE: string;
        
        /**
         * @language zh_CN
         * 保持原始宽高比缩放应用程序内容，缩放后应用程序内容的较宽方向填满播放器视口，另一个方向的两侧可能会不够宽而留有黑边。<br/>
         * 在此模式下，舞台尺寸(Stage.stageWidth,Stage.stageHeight)始终等于初始化时外部传入的应用程序内容尺寸。
         */
        static SHOW_ALL: string;
        
        /**
         * @language zh_CN
         * 保持原始宽高比缩放应用程序内容，缩放后应用程序内容的较窄方向填满播放器视口，另一个方向的两侧可能会超出播放器视口而被裁切。<br/>
         * 在此模式下，舞台尺寸(Stage.stageWidth,Stage.stageHeight)始终等于初始化时外部传入的应用程序内容尺寸。
         */
        static NO_BORDER: string;
        
        /**
         * @language zh_CN
         * 不保持原始宽高比缩放应用程序内容，缩放后应用程序内容正好填满播放器视口。<br/>
         * 在此模式下，舞台尺寸(Stage.stageWidth,Stage.stageHeight)始终等于初始化时外部传入的应用程序内容尺寸。
         */
        static EXACT_FIT: string;
        
        /**
         * @language zh_CN
         * 保持原始宽高比缩放应用程序内容，缩放后应用程序内容在水平和垂直方向都填满播放器视口，但只保持应用程序内容的原始宽度不变，高度可能会改变。<br/>
         * 在此模式下，舞台宽度(Stage.stageWidth)始终等于初始化时外部传入的应用程序内容宽度。舞台高度(Stage.stageHeight)由当前的缩放比例与播放器视口高度决定。
         */
        static FIXED_WIDTH: string;
        
        /**
         * @language zh_CN
         * 保持原始宽高比缩放应用程序内容，缩放后应用程序内容在水平和垂直方向都填满播放器视口，但只保持应用程序内容的原始高度不变，宽度可能会改变。<br/>
         * 在此模式下，舞台高度(Stage.stageHeight)始终等于初始化时外部传入的应用程序内容高度。舞台宽度(Stage.stageWidth)由当前的缩放比例与播放器视口宽度决定。
         */
        static FIXED_HEIGHT: string;
        
        /**
         * @language zh_CN
         * 保持原始宽高比缩放应用程序内容，缩放后应用程序内容在水平和垂直方向都填满播放器视口，应用程序内容的较窄方向可能会不够宽而填充。<br/>
         * 在此模式下，舞台高度(Stage.stageHeight)和舞台宽度(Stage.stageWidth)由当前的缩放比例与播放器视口宽高决定。
         */
        static FIXED_NARROW: string;
        
        /**
         * @language zh_CN
         * 保持原始宽高比缩放应用程序内容，缩放后应用程序内容在水平和垂直方向都填满播放器视口，应用程序内容的较宽方向的两侧可能会超出播放器视口而被裁切。<br/>
         * 在此模式下，舞台高度(Stage.stageHeight)和舞台宽度(Stage.stageWidth)由当前的缩放比例与播放器视口宽高决定。
         */
        static FIXED_WIDE: string;
    }
}
declare module egret.sys {
    var systemRenderer: SystemRenderer;
    /**
     * @private
     * 显示渲染器接口
     */
    interface SystemRenderer {
        /**
         * 渲染一个显示对象
         * @param displayObject 要渲染的显示对象
         * @param buffer 渲染缓冲
         * @param matrix 要对显示对象整体叠加的变换矩阵
         * @param dirtyList 脏矩形列表
         * @param forRenderTexture 绘制目标是RenderTexture的标志
         * @returns drawCall触发绘制的次数
         */
        render(displayObject: DisplayObject, buffer: RenderBuffer, matrix: Matrix, dirtyList?: Region[], forRenderTexture?: boolean): number;
        /**
         * 将一个RenderNode对象绘制到渲染缓冲
         * @param node 要绘制的节点
         * @param buffer 渲染缓冲
         * @param matrix 要叠加的矩阵
         * @param forHitTest 绘制结果是用于碰撞检测。若为true，当渲染GraphicsNode时，会忽略透明度样式设置，全都绘制为不透明的。
         */
        drawNodeToBuffer(node: sys.RenderNode, buffer: RenderBuffer, matrix: Matrix, forHitTest?: boolean): void;
    }
}
declare module egret.sys {
    /**
     * @private
     */
    var $START_TIME: number;
    /**
     * @private
     * 是否要广播Event.RENDER事件的标志。
     */
    var $invalidateRenderFlag: boolean;
    /**
     * @private
     * 需要立即刷新屏幕的标志
     */
    var $requestRenderingFlag: boolean;
    /**
     * @private
     * Egret心跳计时器
     */
    class SystemTicker {
        /**
         * @private
         */
        constructor();
        /**
         * @private
         */
        private playerList;
        /**
         * @private
         * 注册一个播放器实例并运行
         */
        $addPlayer(player: Player): void;
        /**
         * @private
         * 停止一个播放器实例的运行。
         */
        $removePlayer(player: Player): void;
        /**
         * @private
         */
        private callBackList;
        /**
         * @private
         */
        private thisObjectList;
        /**
         * @private
         */
        $startTick(callBack: (timeStamp: number) => boolean, thisObject: any): void;
        /**
         * @private
         */
        $stopTick(callBack: (timeStamp: number) => boolean, thisObject: any): void;
        /**
         * @private
         */
        private getTickIndex(callBack, thisObject);
        /**
         * @private
         *
         */
        private concatTick();
        /**
         * @private
         * 全局帧率
         */
        $frameRate: number;
        /**
         * @private
         */
        private frameInterval;
        /**
         * @private
         * 设置全局帧率
         */
        $setFrameRate(value: number): boolean;
        /**
         * @private
         */
        private lastCount;
        /**
         * @private
         * ticker 花销的时间
         */
        private costEnterFrame;
        /**
         * @private
         * 执行一次刷新
         */
        update(): void;
        /**
         * @private
         * 执行一次屏幕渲染
         */
        private render(triggerByFrame, costTicker);
        /**
         * @private
         * 广播EnterFrame事件。
         */
        private broadcastEnterFrame();
        /**
         * @private
         * 广播Render事件。
         */
        private broadcastRender();
    }
    /**
     * @private
     * 心跳计时器单例
     */
    var $ticker: SystemTicker;
}
declare module egret.sys {
    /**
     * @private
     * 用户交互操作管理器
     */
    class TouchHandler extends HashObject {
        private maxTouches;
        private useTouchesCount;
        /**
         * @private
         */
        constructor(stage: Stage);
        /**
         * @private
         * 设置同时触摸数量
         */
        $initMaxTouches(): void;
        /**
         * @private
         */
        private stage;
        /**
         * @private
         */
        private touchDownTarget;
        /**
         * @private
         * 触摸开始（按下）
         * @param x 事件发生处相对于舞台的坐标x
         * @param y 事件发生处相对于舞台的坐标y
         * @param touchPointID 分配给触摸点的唯一标识号
         */
        onTouchBegin(x: number, y: number, touchPointID: number): void;
        /**
         * @private
         */
        private lastTouchX;
        /**
         * @private
         */
        private lastTouchY;
        /**
         * @private
         * 触摸移动
         * @param x 事件发生处相对于舞台的坐标x
         * @param y 事件发生处相对于舞台的坐标y
         * @param touchPointID 分配给触摸点的唯一标识号
         */
        onTouchMove(x: number, y: number, touchPointID: number): void;
        /**
         * @private
         * 触摸结束（弹起）
         * @param x 事件发生处相对于舞台的坐标x
         * @param y 事件发生处相对于舞台的坐标y
         * @param touchPointID 分配给触摸点的唯一标识号
         */
        onTouchEnd(x: number, y: number, touchPointID: number): void;
        /**
         * @private
         * 获取舞台坐标下的触摸对象
         */
        private findTarget(stageX, stageY);
    }
}
declare module egret.sys {
    /**
     * @private
     * 渲染节点类型
     */
    const enum RenderNodeType {
        /**
         * 位图渲染节点
         */
        BitmapNode = 1,
        /**
         * 文本渲染节点
         */
        TextNode = 2,
        /**
         * 矢量渲染节点
         */
        GraphicsNode = 3,
        /**
         * 组渲染节点
         */
        GroupNode = 4,
        /**
         * 设置矩阵节点
         */
        SetTransformNode = 5,
        /**
         * 设置透明度节点
         */
        SetAlphaNode = 6,
        /**
         * Mesh 节点
         */
        MeshNode = 7,
    }
    /**
     * @private
     * 渲染节点基类
     */
    class RenderNode {
        /**
         * 节点类型..
         */
        type: number;
        /**
         * 是否需要重绘的标志。
         */
        needRedraw: boolean;
        /**
         * 这个对象在舞台上的整体透明度
         */
        renderAlpha: number;
        /**
         * 这个对象在舞台上的透明度
         */
        renderVisible: boolean;
        /**
         * 相对于显示列表根节点或位图缓存根节点上的矩阵对象
         */
        renderMatrix: Matrix;
        /**
         * 此显示对象自身（不包括子项）在显示列表根节点或位图缓存根节点上的显示尺寸。
         */
        renderRegion: sys.Region;
        /**
         * 是否发生移动
         */
        moved: boolean;
        /**
         * 绘制数据
         */
        drawData: any[];
        /**
         * 绘制次数
         */
        protected renderCount: number;
        /**
         * 在显示对象的$render()方法被调用前，自动清空自身的drawData数据。
         */
        cleanBeforeRender(): void;
        $getRenderCount(): number;
    }
}
declare module egret.sys {
    /**
     * @private
     * 位图渲染节点
     */
    class BitmapNode extends RenderNode {
        constructor();
        /**
         * 要绘制的位图
         */
        image: BitmapData;
        /**
         * 控制在缩放时是否对位图进行平滑处理。
         */
        smoothing: boolean;
        /**
         * 相对偏移矩阵。
         */
        matrix: egret.Matrix;
        /**
         * 图片宽度。WebGL渲染使用
         */
        imageWidth: number;
        /**
         * 图片高度。WebGL渲染使用
         */
        imageHeight: number;
        /**
         * 使用的混合模式
         */
        blendMode: number;
        /**
         * 绘制一次位图
         */
        drawImage(sourceX: number, sourceY: number, sourceW: number, sourceH: number, drawX: number, drawY: number, drawW: number, drawH: number): void;
        /**
         * 在显示对象的$render()方法被调用前，自动清空自身的drawData数据。
         */
        cleanBeforeRender(): void;
    }
}
declare module egret.sys {
    /**
     * @private
     * 矢量渲染节点
     */
    class GraphicsNode extends RenderNode {
        constructor();
        /**
         * 指定一种简单的单一颜色填充，在绘制时该填充将在随后对其他 Graphics 方法（如 lineTo() 或 drawCircle()）的调用中使用。
         * @param color 填充的颜色
         * @param alpha 填充的 Alpha 值
         * @param beforePath 插入在指定的路径命令之前绘制，通常是插入到当前正在绘制的线条路径之前，以确保线条总在填充的上方。
         */
        beginFill(color: number, alpha?: number, beforePath?: Path2D): Path2D;
        /**
         * 指定一种简单的单一颜色填充，在绘制时该填充将在随后对其他 Graphics 方法（如 lineTo() 或 drawCircle()）的调用中使用。
         * 调用 clear() 方法会清除填充。
         * @param type 用于指定要使用哪种渐变类型的 GradientType 类的值：GradientType.LINEAR 或 GradientType.RADIAL。
         * @param colors 渐变中使用的 RGB 十六进制颜色值的数组（例如，红色为 0xFF0000，蓝色为 0x0000FF，等等）。对于每种颜色，请在 alphas 和 ratios 参数中指定对应值。
         * @param alphas colors 数组中对应颜色的 alpha 值数组。
         * @param ratios 颜色分布比率的数组。有效值为 0 到 255。
         * @param matrix 一个由 egret.Matrix 类定义的转换矩阵。egret.Matrix 类包括 createGradientBox() 方法，通过该方法可以方便地设置矩阵，以便与 beginGradientFill() 方法一起使用
         * @param beforePath 插入在指定的路径命令之前绘制，通常是插入到当前正在绘制的线条路径之前，以确保线条总在填充的上方。
         */
        beginGradientFill(type: string, colors: number[], alphas: number[], ratios: number[], matrix?: egret.Matrix, beforePath?: Path2D): Path2D;
        /**
         * 指定一种线条样式以用于随后对 lineTo() 或 drawCircle() 等 Graphics 方法的调用。
         * @param thickness 一个整数，以点为单位表示线条的粗细，有效值为 0 到 255。如果未指定数字，或者未定义该参数，则不绘制线条。如果传递的值小于 0，则默认值为 0。值 0 表示极细的粗细；最大粗细为 255。如果传递的值大于 255，则默认值为 255。
         * @param color 线条的十六进制颜色值（例如，红色为 0xFF0000，蓝色为 0x0000FF 等）。如果未指明值，则默认值为 0x000000（黑色）。可选。
         * @param alpha 表示线条颜色的 Alpha 值的数字；有效值为 0 到 1。如果未指明值，则默认值为 1（纯色）。如果值小于 0，则默认值为 0。如果值大于 1，则默认值为 1。
         * @param caps 用于指定线条末端处端点类型的 CapsStyle 类的值。默认值：CapsStyle.ROUND
         * @param joints 指定用于拐角的连接外观的类型。默认值：JointStyle.ROUND
         * @param miterLimit 用于表示剪切斜接的极限值的数字。
         */
        lineStyle(thickness?: number, color?: number, alpha?: number, caps?: string, joints?: string, miterLimit?: number): Path2D;
        /**
         * 清空所有缓存的绘制数据
         */
        clear(): void;
        /**
         * 覆盖父类方法，不自动清空缓存的绘图数据，改为手动调用clear()方法清空。
         */
        cleanBeforeRender(): void;
        /**
         * 绘制x偏移
         */
        x: number;
        /**
         * 绘制y偏移
         */
        y: number;
        /**
         * 绘制宽度
         */
        width: number;
        /**
         * 绘制高度
         */
        height: number;
        /**
         * 脏渲染标记
         * 暂时调用lineStyle,beginFill,beginGradientFill标记,实际应该draw时候标记在Path2D
         */
        dirtyRender: boolean;
        $texture: any;
        $textureWidth: any;
        $textureHeight: any;
    }
}
declare module egret.sys {
    /**
     * @private
     * 组渲染节点,用于组合多个渲染节点
     */
    class GroupNode extends RenderNode {
        constructor();
        addNode(node: RenderNode): void;
        /**
         * 覆盖父类方法，不自动清空缓存的绘图数据，改为手动调用clear()方法清空。
         * 这里只是想清空绘制命令，因此不调用super
         */
        cleanBeforeRender(): void;
        $getRenderCount(): number;
    }
}
declare module egret.sys {
    /**
     * @private
     * Mesh 渲染节点
     */
    class MeshNode extends RenderNode {
        constructor();
        /**
         * 要绘制的位图
         */
        image: BitmapData;
        /**
         * 控制在缩放时是否对位图进行平滑处理。
         */
        smoothing: boolean;
        /**
         * 图片宽度。WebGL渲染使用
         */
        imageWidth: number;
        /**
         * 图片高度。WebGL渲染使用
         */
        imageHeight: number;
        /**
         * 相对偏移矩阵。
         */
        matrix: egret.Matrix;
        /**
         * UV 坐标。
         */
        uvs: number[];
        /**
         * 顶点坐标。
         */
        vertices: number[];
        /**
         * 顶点索引。
         */
        indices: number[];
        /**
         * 顶点索引。
         */
        bounds: Rectangle;
        /**
         * 绘制一次位图
         */
        drawMesh(sourceX: number, sourceY: number, sourceW: number, sourceH: number, drawX: number, drawY: number, drawW: number, drawH: number): void;
        /**
         * 在显示对象的$render()方法被调用前，自动清空自身的drawData数据。
         */
        cleanBeforeRender(): void;
    }
}
declare module egret.sys {
    /**
     * @private
     * 位图渲染节点
     */
    class SetAlphaNode extends RenderNode {
        constructor();
        /**
         * 绘制一次位图
         */
        setAlpha(alpha: number): void;
    }
}
declare module egret.sys {
    /**
     * @private
     * 位图渲染节点
     */
    class SetTransformNode extends RenderNode {
        constructor();
        /**
         * 绘制一次位图
         */
        setTransform(a: number, b: number, c: number, d: number, tx: number, ty: number): void;
    }
}
declare module egret.sys {
    /**
     * @private
     * 文本格式
     */
    interface TextFormat {
        /**
         * 颜色值
         */
        textColor?: number;
        /**
         * 描边颜色值
         */
        strokeColor?: number;
        /**
         * 字号
         */
        size?: number;
        /**
         * 描边大小
         */
        stroke?: number;
        /**
         * 是否加粗
         */
        bold?: boolean;
        /**
         * 是否倾斜
         */
        italic?: boolean;
        /**
         * 字体名称
         */
        fontFamily?: string;
    }
}
declare module egret.sys {
    /**
     * @private
     * 文本渲染节点
     */
    class TextNode extends RenderNode {
        constructor();
        /**
         * 颜色值
         */
        textColor: number;
        /**
         * 描边颜色值
         */
        strokeColor: number;
        /**
         * 字号
         */
        size: number;
        /**
         * 描边大小
         */
        stroke: number;
        /**
         * 是否加粗
         */
        bold: boolean;
        /**
         * 是否倾斜
         */
        italic: boolean;
        /**
         * 字体名称
         */
        fontFamily: string;
        /**
         * 绘制一行文本
         */
        drawText(x: number, y: number, text: string, format: TextFormat): void;
        /**
         * 在显示对象的$render()方法被调用前，自动清空自身的drawData数据。
         */
        cleanBeforeRender(): void;
        /**
         * 绘制x偏移
         */
        x: number;
        /**
         * 绘制y偏移
         */
        y: number;
        /**
         * 绘制宽度
         */
        width: number;
        /**
         * 绘制高度
         */
        height: number;
        /**
         * 脏渲染标记
         */
        dirtyRender: boolean;
        $texture: any;
        $textureWidth: any;
        $textureHeight: any;
    }
}
declare module egret.sys {
    /**
     * 路径类型
     */
    const enum PathType {
        /**
         * 纯色填充路径
         */
        Fill = 1,
        /**
         * 渐变填充路径
         */
        GradientFill = 2,
        /**
         * 线条路径
         */
        Stroke = 3,
    }
    /**
     * @private
     * 2D路径命令
     */
    const enum PathCommand {
        MoveTo = 1,
        LineTo = 2,
        CurveTo = 3,
        CubicCurveTo = 4,
    }
    /**
     * @private
     * 2D路径
     */
    class Path2D {
        /**
         * 路径类型
         */
        type: number;
        $commands: number[];
        $data: number[];
        private commandPosition;
        private dataPosition;
        /**
         * 将当前绘图位置移动到 (x, y)。如果缺少任何一个参数，则此方法将失败，并且当前绘图位置不改变。
         * @param x 一个表示相对于父显示对象注册点的水平位置的数字（以像素为单位）。
         * @param y 一个表示相对于父显示对象注册点的垂直位置的数字（以像素为单位）。
         */
        moveTo(x: number, y: number): void;
        /**
         * 使用当前线条样式绘制一条从当前绘图位置开始到 (x, y) 结束的直线；当前绘图位置随后会设置为 (x, y)。
         * @param x 一个表示相对于父显示对象注册点的水平位置的数字（以像素为单位）。
         * @param y 一个表示相对于父显示对象注册点的垂直位置的数字（以像素为单位）。
         */
        lineTo(x: number, y: number): void;
        /**
         * 使用当前线条样式和由 (controlX, controlY) 指定的控制点绘制一条从当前绘图位置开始到 (anchorX, anchorY) 结束的二次贝塞尔曲线。当前绘图位置随后设置为 (anchorX, anchorY)。
         * 如果在调用 moveTo() 方法之前调用了 curveTo() 方法，则当前绘图位置的默认值为 (0, 0)。如果缺少任何一个参数，则此方法将失败，并且当前绘图位置不改变。
         * 绘制的曲线是二次贝塞尔曲线。二次贝塞尔曲线包含两个锚点和一个控制点。该曲线内插这两个锚点，并向控制点弯曲。
         * @param controlX 一个数字，指定控制点相对于父显示对象注册点的水平位置。
         * @param controlY 一个数字，指定控制点相对于父显示对象注册点的垂直位置。
         * @param anchorX 一个数字，指定下一个锚点相对于父显示对象注册点的水平位置。
         * @param anchorY 一个数字，指定下一个锚点相对于父显示对象注册点的垂直位置。
         */
        curveTo(controlX: number, controlY: number, anchorX: number, anchorY: number): void;
        /**
         * 从当前绘图位置到指定的锚点绘制一条三次贝塞尔曲线。三次贝塞尔曲线由两个锚点和两个控制点组成。该曲线内插这两个锚点，并向两个控制点弯曲。
         * @param controlX1 指定首个控制点相对于父显示对象的注册点的水平位置。
         * @param controlY1 指定首个控制点相对于父显示对象的注册点的垂直位置。
         * @param controlX2 指定第二个控制点相对于父显示对象的注册点的水平位置。
         * @param controlY2 指定第二个控制点相对于父显示对象的注册点的垂直位置。
         * @param anchorX 指定锚点相对于父显示对象的注册点的水平位置。
         * @param anchorY 指定锚点相对于父显示对象的注册点的垂直位置。
         */
        cubicCurveTo(controlX1: number, controlY1: number, controlX2: number, controlY2: number, anchorX: number, anchorY: number): void;
        /**
         * 绘制一个矩形
         * @param x 圆心相对于父显示对象注册点的 x 位置（以像素为单位）。
         * @param y 相对于父显示对象注册点的圆心的 y 位置（以像素为单位）。
         * @param width 矩形的宽度（以像素为单位）。
         * @param height 矩形的高度（以像素为单位）。
         */
        drawRect(x: number, y: number, width: number, height: number): void;
        /**
         * 绘制一个圆角矩形。
         * @param x 圆心相对于父显示对象注册点的 x 位置（以像素为单位）。
         * @param y 相对于父显示对象注册点的圆心的 y 位置（以像素为单位）。
         * @param width 矩形的宽度（以像素为单位）。
         * @param height 矩形的高度（以像素为单位）。
         * @param ellipseWidth 用于绘制圆角的椭圆的宽度（以像素为单位）。
         * @param ellipseHeight 用于绘制圆角的椭圆的高度（以像素为单位）。 （可选）如果未指定值，则默认值与为 ellipseWidth 参数提供的值相匹配。
         */
        drawRoundRect(x: number, y: number, width: number, height: number, ellipseWidth: number, ellipseHeight?: number): void;
        /**
         * 绘制一个圆。
         * @param x 圆心相对于父显示对象注册点的 x 位置（以像素为单位）。
         * @param y 相对于父显示对象注册点的圆心的 y 位置（以像素为单位）。
         * @param radius 圆的半径（以像素为单位）。
         */
        drawCircle(x: number, y: number, radius: number): void;
        /**
         * 绘制一个椭圆。
         * @param x 一个表示相对于父显示对象注册点的水平位置的数字（以像素为单位）。
         * @param y 一个表示相对于父显示对象注册点的垂直位置的数字（以像素为单位）。
         * @param width 矩形的宽度（以像素为单位）。
         * @param height 矩形的高度（以像素为单位）。
         */
        drawEllipse(x: number, y: number, width: number, height: number): void;
        /**
         * 绘制一段圆弧路径。圆弧路径的圆心在 (x, y) 位置，半径为 r ，根据anticlockwise （默认为顺时针）指定的方向从 startAngle 开始绘制，到 endAngle 结束。
         * @param x 圆弧中心（圆心）的 x 轴坐标。
         * @param y 圆弧中心（圆心）的 y 轴坐标。
         * @param radius 圆弧的半径。
         * @param startAngle 圆弧的起始点， x轴方向开始计算，单位以弧度表示。
         * 注意，必须在0~2π之间。
         * @param endAngle 圆弧的终点， 单位以弧度表示。
         * 注意，必须在0~2π之间。
         * @param anticlockwise 如果为 true，逆时针绘制圆弧，反之，顺时针绘制。
         */
        drawArc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise: boolean): void;
        /**
         * 绘制一段圆弧路径
         * @param x 圆弧中心（圆心）的 x 轴坐标。
         * @param y 圆弧中心（圆心）的 y 轴坐标。
         * @param radiusX 圆弧的半径 x。
         * @param radiusY 圆弧的半径 y。
         * @param startAngle 圆弧的起始点， x轴方向开始计算，单位以弧度表示。
         * 注意：必须为正数。
         * @param endAngle 圆弧的终点， 单位以弧度表示。
         * 注意：与startAngle差值必须在0~2π之间。
         * @param anticlockwise 如果为 true，逆时针绘制圆弧，反之，顺时针绘制。
         * 注意：如果为true，endAngle必须小于startAngle，反之必须大于。
         */
        private arcToBezier(x, y, radiusX, radiusY, startAngle, endAngle, anticlockwise?);
    }
}
declare module egret.sys {
    /**
     * @private
     * 填充路径
     */
    class FillPath extends Path2D {
        constructor();
        /**
         * 填充颜色
         */
        fillColor: number;
        /**
         * 填充透明度
         */
        fillAlpha: number;
    }
}
declare module egret.sys {
    /**
     * @private
     * 渐变填充路径
     */
    class GradientFillPath extends Path2D {
        constructor();
        gradientType: string;
        colors: number[];
        alphas: number[];
        ratios: number[];
        matrix: Matrix;
    }
}
declare module egret.sys {
    /**
     * @private
     * 线条路径。
     * 注意：当线条宽度（lineWidth）为1或3像素时，需要特殊处理，往右下角偏移0.5像素，以显示清晰锐利的线条。
     */
    class StrokePath extends Path2D {
        constructor();
        /**
         * 线条宽度。
         * 注意：绘制时对1像素和3像素要特殊处理，整体向右下角偏移0.5像素，以显示清晰锐利的线条。
         */
        lineWidth: number;
        /**
         * 线条颜色
         */
        lineColor: number;
        /**
         * 线条透明度
         */
        lineAlpha: number;
        /**
         * 端点样式,"none":无端点,"round":圆头端点,"square":方头端点
         */
        caps: string;
        /**
         * 联接点样式,"bevel":斜角连接,"miter":尖角连接,"round":圆角连接
         */
        joints: string;
        /**
         * 用于表示剪切斜接的极限值的数字。
         */
        miterLimit: number;
    }
}
declare module egret {
    /**
     * @private
     * Canvas渲染器
     */
    class CanvasRenderer implements sys.SystemRenderer {
        constructor();
        private nestLevel;
        /**
         * 渲染一个显示对象
         * @param displayObject 要渲染的显示对象
         * @param buffer 渲染缓冲
         * @param matrix 要对显示对象整体叠加的变换矩阵
         * @param dirtyList 脏矩形列表
         * @param forRenderTexture 绘制目标是RenderTexture的标志
         * @returns drawCall触发绘制的次数
         */
        render(displayObject: DisplayObject, buffer: sys.RenderBuffer, matrix: Matrix, dirtyList?: egret.sys.Region[], forRenderTexture?: boolean): number;
        /**
         * @private
         * 绘制一个显示对象
         */
        private drawDisplayObject(displayObject, context, dirtyList, matrix, displayList, clipRegion, root);
        private renderingMask;
        /**
         * @private
         */
        private drawWithClip(displayObject, context, dirtyList, matrix, clipRegion, root);
        /**
         * @private
         */
        private drawWithScrollRect(displayObject, context, dirtyList, matrix, clipRegion, root);
        /**
         * 将一个RenderNode对象绘制到渲染缓冲
         * @param node 要绘制的节点
         * @param buffer 渲染缓冲
         * @param matrix 要叠加的矩阵
         * @param forHitTest 绘制结果是用于碰撞检测。若为true，当渲染GraphicsNode时，会忽略透明度样式设置，全都绘制为不透明的。
         */
        drawNodeToBuffer(node: sys.RenderNode, buffer: sys.RenderBuffer, matrix: Matrix, forHitTest?: boolean): void;
        /**
         * @private
         */
        private renderNode(node, context, forHitTest?);
        /**
         * @private
         */
        private renderBitmap(node, context);
        /**
         * @private
         */
        private renderText(node, context);
        /**
         * @private
         */
        private renderGraphics(node, context, forHitTest?);
        private renderPath(path, context);
        private renderGroup(groupNode, context);
        /**
         * @private
         */
        private createRenderBuffer(width, height);
    }
}
declare module egret {
    
    /**
     * @language zh_CN
     * Orientation 监听设备方向的变化，当方向变化时派发 CHANGE 事件
     * @event egret.Event.CHANGE 设备方向改变时派发
     * @version Egret 2.4
     * @platform Web,Native
     * @includeExample egret/sensor/DeviceOrientation.ts
     * @see http://edn.egret.com/cn/docs/page/661 获取设备旋转角度
     */
    interface DeviceOrientation extends EventDispatcher {
        
        /**
         * @language zh_CN
         * 开始监听设备方向变化
         * @version Egret 2.4
         * @platform Web,Native
         */
        start(): void;
        
        /**
         * @language zh_CN
         * 停止监听设备方向变化
         * @version Egret 2.4
         * @platform Web,Native
         */
        stop(): void;
    }
    /**
     * @copy egret.Orientation
     */
    var DeviceOrientation: {
        new (): DeviceOrientation;
    };
}
declare module egret {
    
    /**
     * @language zh_CN
     * Geolocation 能够从设备的定位服务获取设备的当前位置。
     * 当设备的位置发生改变时 Geolocation 会派发 CHANGE 事件。
     * 当定位请求被拒绝或该设备没有定位服务时 Geolocation 会派发 IO_ERROR 事件。
     *
     * @event egret.Event.CHANGE 设备位置发生改变
     * @event egret.Event.IO_ERROR 获取设备位置时发生错误
     * @version Egret 2.4
     * @platform Web,Native
     * @includeExample egret/sensor/Geolocation.ts
     */
    interface Geolocation extends EventDispatcher {
        
        /**
         * @language zh_CN
         * 开始监听设备位置信息
         * @returns
         * @version Egret 2.4
         * @platform Web,Native
         */
        start(): void;
        
        /**
         * @language zh_CN
         * 停止监听设备位置信息
         * @returns
         * @version Egret 2.4
         * @platform Web,Native
         */
        stop(): void;
    }
    /**
     * @copy egret.Geolocation
     */
    var Geolocation: {
        
        /**
         * @language zh_CN
         * 构造函数
         * @version Egret 2.4
         * @platform Web,Native
         */
        new (): Geolocation;
    };
}
declare module egret {
    /**
     * @copy egret.Motion
     */
    var Motion: {
        new (): Motion;
    };
    
    /**
     * @language zh_CN
     * Motion 类从用户设备读取运动状态信息并派发 CHANGE 事件。
     * 当设备移动时，传感器会检测到此移动并返回设备加速度，重力和旋转数据。@see egret.MotionEvent
     * Motion 类提供了 start 和 stop 方法，来启动和停止运动信息检查
     *
     * @event egret.Event.CHANGE 运动状态发生改变
     * @version Egret 2.4
     * @platform Web,Native
     * @includeExample egret/sensor/Motion.ts
     */
    interface Motion extends EventDispatcher {
        
        /**
         * @language zh_CN
         * 开始监听设备运动状态
         * @version Egret 2.4
         * @platform Web,Native
         */
        start(): void;
        
        /**
         * @language zh_CN
         * 停止监听设备运动状态
         * @version Egret 2.4
         * @platform Web,Native
         */
        stop(): void;
    }
    
    /**
     * @language zh_CN
     * DeviceRotationRate 提供设备围绕三个轴旋转的角速度信息，单位是 角度/秒
     * @version Egret 2.4
     * @platform Web,Native
     */
    interface DeviceRotationRate {
        
        /**
         * @language zh_CN
         * 设备绕 Z 轴旋转的角速度信息，单位是 度/秒
         * @version Egret 2.4
         * @platform Web,Native
         */
        alpha: number;
        
        /**
         * @language zh_CN
         * 设备绕 X 轴旋转的角速度信息，单位是 度/秒
         * @version Egret 2.4
         * @platform Web,Native
         */
        beta: number;
        
        /**
         * @language zh_CN
         * 设备绕 Y 轴旋转的角速度信息，单位是 度/秒
         * @version Egret 2.4
         * @platform Web,Native
         */
        gamma: number;
    }
    
    /**
     * @language zh_CN
     * DeviceAcceleration 提供设备在三个维度的加速度信息，加速度值的单位是 m/s2
     * @version Egret 2.4
     * @platform Web,Native
     */
    interface DeviceAcceleration {
        
        /**
         * @language zh_CN
         * X 轴方向的加速度值
         * @version Egret 2.4
         * @platform Web,Native
         */
        x: number;
        
        /**
         * @language zh_CN
         * Y 轴方向的加速度值
         * @version Egret 2.4
         * @platform Web,Native
         */
        y: number;
        
        /**
         * @language zh_CN
         * Z 轴方向的加速度值
         * @version Egret 2.4
         * @platform Web,Native
         */
        z: number;
    }
}
declare module egret {
    
    /**
     * @language zh_CN
     * 运行类型的类型。
     * @version Egret 2.4
     * @platform Web,Native
     */
    class RuntimeType {
        
        /**
         * @language zh_CN
         * 运行在Web上
         * @version Egret 2.4
         * @platform Web,Native
         */
        static WEB: string;
        
        /**
         * @language zh_CN
         * 运行在NATIVE上
         * @version Egret 2.4
         * @platform Web,Native
         */
        static NATIVE: string;
    }
    
    /**
     * @language zh_CN
     * Capabilities 类提供一些属性，这些属性描述了承载应用程序的系统和运行时。
     * @version Egret 2.4
     * @platform Web,Native
     * @includeExample egret/system/Capabilities.ts
     */
    class Capabilities {
        /**
         * @private
         */
        static $language: string;
        
        /**
         * @language zh_CN
         * 表示运行内容的系统的语言代码。语言指定为 ISO 639-1 中的小写双字母语言代码。
         * 对于中文，另外使用 ISO 3166 中的大写双字母国家/地区代码，以区分简体中文和繁体中文。<br/>
         * 以下是可能但不限于的语言和值：
         * <ul>
         * <li>简体中文  zh-CN</li>
         * <li>繁体中文  zh-TW</li>
         * <li>英语      en</li>
         * <li>日语      ja</li>
         * <li>韩语      ko</li>
         * </ul>
         * @version Egret 2.4
         * @platform Web,Native
         */
        static language: string;
        /**
         * @private
         */
        static $isMobile: boolean;
        
        /**
         * @language zh_CN
         * 表示程序内容是否运行在移动设备中（例如移动电话或平板电脑）。
         * @version Egret 2.4
         * @platform Web,Native
         */
        static isMobile: boolean;
        /**
         * @private
         */
        static $os: string;
        
        /**
         * @language zh_CN
         * 指示当前的操作系统。os 属性返回下列字符串：
         * <ul>
         * <li>苹果手机操作系统     "iOS"</li>
         * <li>安卓手机操作系统     "Android"</li>
         * <li>微软手机操作系统     "Windows Phone"</li>
         * <li>微软桌面操作系统     "Windows PC"</li>
         * <li>苹果桌面操作系统     "Mac OS"</li>
         * <li>未知操作系统        "Unknown"</li>
         * </ul>
         * @version Egret 2.4
         * @platform Web,Native
         */
        static os: string;
        /**
         * @private
         */
        static $runtimeType: string;
        
        /**
         * @language zh_CN
         * 指示当前的运行类型。runtimeType 属性返回下列字符串：
         * <ul>
         * <li>运行在Web上     egret.RuntimeType.WEB</li>
         * <li>运行在Native上     egret.RuntimeType.NATIVE</li>
         * </ul>
         * @version Egret 2.4
         * @platform Web,Native
         */
        static runtimeType: string;
        
        /***
         * @language zh_CN
         * native support 的版本号
         * @type {string}
         * @version Egret 2.5
         * @platform Web,Native
         */
        static supportVersion: string;
        /**
         * 设置系统信息
         */
        static $setNativeCapabilities(value: string): void;
        
        /***
         * @language zh_CN
         * 当前渲染模式
         * @type {string}
         * @version Egret 3.0.7
         * @platform Web,Native
         */
        static renderMode: string;
    }
}
declare var testDeviceType: () => boolean;
declare var testRuntimeType: () => boolean;
declare module egret {
    
    /**
     * @language zh_CN
     * 判断参数assertion是否为true，若为false则抛出异常并且在console输出相应信息，反之什么也不做。
     * @param assertion 一个 boolean 表达式，若结果为false，则抛出错误并输出信息。
     * @param message 要输出到控制台的信息
     * @param optionalParams 要输出到控制台的额外可选信息
     */
    function assert(assertion?: boolean, message?: string, ...optionalParams: any[]): void;
    
    /**
     * @language zh_CN
     * 输出一个警告信息到控制台。
     * @param message 要输出到控制台的信息
     * @param optionalParams 要输出到控制台的额外信息
     */
    function warn(message?: any, ...optionalParams: any[]): void;
    
    /**
     * @language zh_CN
     * 输出一个错误信息到控制台。
     * @param message 要输出到控制台的信息
     * @param optionalParams 要输出到控制台的额外信息
     */
    function error(message?: any, ...optionalParams: any[]): void;
    
    /**
     * @language zh_CN
     * 输出一个日志信息到控制台。
     * @param message 要输出到控制台的信息
     * @param optionalParams 要输出到控制台的额外信息
     */
    function log(message?: any, ...optionalParams: any[]): void;
}
declare module egret {
    
    /**
     * @language zh_CN
     * 位图字体,是一个字体的纹理集，通常作为BitmapText.font属性的值。
     * @see http://bbs.egret-labs.org/thread-918-1-1.html TextureMerger
     * @see http://bbs.egret-labs.org/forum.php?mod=viewthread&tid=251 文本(含位图字体具体用法)
     * @version Egret 2.4
     * @platform Web,Native
     * @includeExample egret/text/BitmapFont.ts
     */
    class BitmapFont extends SpriteSheet {
        
        /**
         * @language zh_CN
         * 创建一个 egret.BitmapFont 对象
         * @param texture {egret.Texture} 使用TextureMerger生成的纹理集
         * @param config {any} 使用TextureMerger生成的配置数据
         * @version Egret 2.4
         * @platform Web,Native
         */
        constructor(texture: Texture, config: any);
        /**
         * @private
         */
        private charList;
        
        /**
         * @language zh_CN
         * 通过 name 属性获取对应纹理
         * @param name {string} name属性
         * @returns {egret.Texture}
         * @version Egret 2.4
         * @platform Web,Native
         */
        getTexture(name: string): Texture;
        /**
         * @private
         */
        private firstCharHeight;
        /**
         * @private
         *
         * @returns
         */
        _getFirstCharHeight(): number;
        /**
         * @private
         *
         * @param fntText
         * @returns
         */
        private parseConfig(fntText);
        /**
         * @private
         *
         * @param configText
         * @param key
         * @returns
         */
        private getConfigByKey(configText, key);
    }
}
declare module egret.sys {
    /**
     * @private
     */
    const enum BitmapTextKeys {
        /**
         * @private 外部设定的值
         */
        textFieldWidth = 0,
        /**
         * @private 外部设定的值
         */
        textFieldHeight = 1,
        /**
         * @private
         */
        text = 2,
        /**
         * @private
         */
        lineSpacing = 3,
        /**
         * @private
         */
        letterSpacing = 4,
        /**
         * @private
         */
        font = 5,
        /**
         * @private
         */
        fontStringChanged = 6,
        /**
         * @private
         */
        textLinesChanged = 7,
        /**
         * @private 测量的值
         */
        textWidth = 8,
        /**
         * @private 测量的值
         */
        textHeight = 9,
        /**
         * @private
         */
        textAlign = 10,
        /**
         * @private
         */
        verticalAlign = 11,
        /**
         * @private
         */
        smoothing = 12,
    }
}
declare module egret {
    
    /**
     * @language zh_CN
     * 位图字体采用了Bitmap+SpriteSheet的方式来渲染文字。
     * @version Egret 2.4
     * @platform Web,Native
     * @includeExample egret/text/BitmapText.ts
     */
    class BitmapText extends DisplayObject {
        
        /**
         * @language zh_CN
         * 创建一个 egret.BitmapText 对象
         * @version Egret 2.4
         * @platform Web,Native
         */
        constructor();
        
        /**
         * @language zh_CN
         * 控制在缩放时是否进行平滑处理。
         * @default true。
         * @version Egret 3.0
         * @platform Web
         */
        smoothing: boolean;
        /**
         * @private
         */
        $BitmapText: Object;
        
        /**
         * @language zh_CN
         * 要显示的文本内容
         * @version Egret 2.4
         * @platform Web,Native
         */
        text: string;
        /**
         * @private
         */
        $setText(value: string): boolean;
        /**
         * @private
         */
        $getWidth(): number;
        /**
         * @private
         */
        $setWidth(value: number): boolean;
        /**
         * @private
         */
        $invalidateContentBounds(): void;
        /**
         * @private
         */
        $getHeight(): number;
        /**
         * @private
         */
        $setHeight(value: number): boolean;
        
        /**
         * @language zh_CN
         * 要使用的字体的名称或用逗号分隔的字体名称列表，类型必须是 BitmapFont。
         * @default null
         * @version Egret 2.4
         * @platform Web,Native
         */
        font: Object;
        $setFont(value: any): boolean;
        
        /**
         * @language zh_CN
         * 一个整数，表示行与行之间的垂直间距量
         * @default 0
         * @version Egret 2.4
         * @platform Web,Native
         */
        lineSpacing: number;
        $setLineSpacing(value: number): boolean;
        
        /**
         * @language zh_CN
         * 一个整数，表示字符之间的距量。
         * @default 0
         * @version Egret 2.4
         * @platform Web,Native
         */
        letterSpacing: number;
        $setLetterSpacing(value: number): boolean;
        
        /**
         * @language zh_CN
         * 文本的水平对齐方式。
         * @default：egret.HorizontalAlign.LEFT
         * @version Egret 2.5.6
         * @platform Web,Native
         */
        textAlign: string;
        $setTextAlign(value: string): boolean;
        
        /**
         * @language zh_CN
         * 文字的垂直对齐方式。
         * @default：egret.VerticalAlign.TOP
         * @version Egret 2.5.6
         * @platform Web,Native
         */
        verticalAlign: string;
        $setVerticalAlign(value: string): boolean;
        
        /**
         * @language zh_CN
         * 一个空格字符的宽度比例。这个数值乘以第一个字符的高度即为空格字符的宽。
         * @default 0.33
         * @version Egret 2.4
         * @platform Web,Native
         */
        static EMPTY_FACTOR: number;
        /**
         * @private
         */
        $render(): void;
        /**
         * @private
         */
        $measureContentBounds(bounds: Rectangle): void;
        
        /**
         * @language zh_CN
         * 获取位图文本测量宽度
         * @version Egret 2.4
         * @platform Web,Native
         */
        textWidth: number;
        
        /**
         * @language zh_CN
         * 获取位图文本测量高度
         * @version Egret 2.4
         * @platform Web,Native
         */
        textHeight: number;
        /**
         * @private
         */
        private $textOffsetX;
        /**
         * @private
         */
        private $textOffsetY;
        /**
         * @private
         */
        private $textStartX;
        /**
         * @private
         */
        private $textStartY;
        /**
         * @private
         */
        private textLines;
        /**
         * @private 每一行文字的宽度
         */
        private $textLinesWidth;
        /**
         * @private
         */
        $lineHeights: Array<number>;
        /**
         * @private
         *
         * @returns
         */
        $getTextLines(): Array<string>;
    }
}
declare module egret {
    
    /**
     * @language zh_CN
     * HorizontalAlign 类为水平对齐方式定义可能的值。
     * @see egret.TextField#textAlign
     * @version Egret 2.4
     * @platform Web,Native
     */
    class HorizontalAlign {
        
        /**
         * @language zh_CN
         * 将内容与容器的左侧对齐。
         * @version Egret 2.4
         * @platform Web,Native
         */
        static LEFT: string;
        
        /**
         * @language zh_CN
         * 将内容与容器的右侧对齐。
         * @version Egret 2.4
         * @platform Web,Native
         */
        static RIGHT: string;
        
        /**
         * @language zh_CN
         * 在容器的水平中心对齐内容。
         * @version Egret 2.4
         * @platform Web,Native
         */
        static CENTER: string;
        
        /**
         * @language zh_CN
         * 水平两端对齐。
         * 注意：TextFiled不支持此对齐方式。
         * @constant egret.HorizontalAlign.JUSTIFY
         * @version Egret 2.4
         * @platform Web,Native
         */
        static JUSTIFY: string;
        
        /**
         * @language zh_CN
         * 相对于容器对子项进行内容对齐。这会将所有子项的大小统一调整为容器的"内容宽度"。
         * 容器的"内容宽度"是最大子项的大小,如果所有子项都小于容器的宽度，则会将所有子项的大小调整为容器的宽度。
         * 注意：TextFiled不支持此对齐方式。
         * @constant egret.HorizontalAlign.CONTENT_JUSTIFY
         * @version Egret 2.4
         * @platform Web,Native
         */
        static CONTENT_JUSTIFY: string;
    }
}
declare module egret {
    
    /**
     * @language zh_CN
     * 将html格式文本转换为可赋值给 egret.TextField#textFlow 属性的对象
     * @see http://edn.egret.com/cn/docs/page/146 多种样式文本混合
     * @version Egret 2.4
     * @platform Web,Native
     * @includeExample egret/text/HtmlTextParser.ts
     */
    class HtmlTextParser {
        /**
         * @version Egret 2.4
         * @platform Web,Native
         */
        constructor();
        private replaceArr;
        private initReplaceArr();
        /**
         * @private
         *
         * @param value
         * @returns
         */
        private replaceSpecial(value);
        /**
         * @private
         */
        private resutlArr;
        
        /**
         * @language zh_CN
         * 将html格式文本转换为可赋值给 egret.TextField#textFlow 属性的对象
         * @param htmltext {string} html文本
         * @returns {Array<egret.ITextElement>} 可赋值给 egret.TextField#textFlow 属性的对象
         * @version Egret 2.4
         * @platform Web,Native
         */
        parser(htmltext: string): Array<egret.ITextElement>;
        /**
         * @private
         *
         * @param value
         */
        private addToResultArr(value);
        private changeStringToObject(str);
        /**
         * @private
         *
         * @returns
         */
        private getHeadReg();
        /**
         * @private
         *
         * @param info
         * @param head
         * @param value
         */
        private addProperty(info, head, value);
        /**
         * @private
         */
        private stackArray;
        /**
         * @private
         *
         * @param infoStr
         */
        private addToArray(infoStr);
    }
}
declare module egret {
    /**
     * @private
     * @version Egret 2.4
     * @platform Web,Native
     */
    interface IHitTextElement {
        /**
         * @version Egret 2.4
         * @platform Web,Native
         */
        lineIndex: number;
        /**
         * @version Egret 2.4
         * @platform Web,Native
         */
        textElementIndex: number;
    }
    
    /**
     * @language zh_CN
     * 文本样式
     * @version Egret 2.4
     * @platform Web,Native
     */
    interface ITextStyle {
        
        /**
         * @language zh_CN
         * 颜色值
         * @version Egret 2.4
         * @platform Web,Native
         * @see http://edn.egret.com/cn/docs/page/146 多种样式混合文本的基本结构
         */
        textColor?: number;
        
        /**
         * @language zh_CN
         * 描边颜色值
         * @version Egret 2.4
         * @platform Web,Native
         */
        strokeColor?: number;
        
        /**
         * @language zh_CN
         * 字号
         * @version Egret 2.4
         * @platform Web,Native
         */
        size?: number;
        
        /**
         * @language zh_CN
         * 描边大小
         * @version Egret 2.4
         * @platform Web,Native
         */
        stroke?: number;
        
        /**
         * @language zh_CN
         * 是否加粗
         * @version Egret 2.4
         * @platform Web,Native
         */
        bold?: boolean;
        
        /**
         * @language zh_CN
         * 是否倾斜
         * @version Egret 2.4
         * @platform Web,Native
         */
        italic?: boolean;
        
        /**
         * @language zh_CN
         * 字体名称
         * @version Egret 2.4
         * @platform Web,Native
         */
        fontFamily?: string;
        
        /**
         * @language zh_CN
         * 链接事件或者地址
         * @version Egret 2.4
         * @platform Web,Native
         */
        href?: string;
        
        /**
         * @language zh_CN
         * @private
         * @version Egret 2.4
         * @platform Web,Native
         */
        target?: string;
        
        /**
         * @language zh_CN
         * 是否加下划线
         * @version Egret 2.4
         * @platform Web,Native
         */
        underline?: boolean;
    }
    
    /**
     * @language zh_CN
     * 用于建立多种样式混合文本的基本结构，主要用于设置 textFlow 属性
     * @see http://edn.egret.com/cn/docs/page/146 多种样式文本混合
     * @version Egret 2.4
     * @platform Web,Native
     */
    interface ITextElement {
        
        /**
         * @language zh_CN
         * 字符串内容
         * @version Egret 2.4
         * @platform Web,Native
         */
        text: string;
        
        /**
         * @language zh_CN
         * 文本样式
         * @version Egret 2.4
         * @platform Web,Native
         */
        style?: ITextStyle;
    }
    /**
     * @private
     * @version Egret 2.4
     * @platform Web,Native
     */
    interface IWTextElement extends ITextElement {
        /**
         * @version Egret 2.4
         * @platform Web,Native
         */
        width: number;
    }
    /**
     * 文本最终解析的一行数据格式
     * @private
     * @version Egret 2.4
     * @platform Web,Native
     */
    interface ILineElement {
        /**
         * 文本占用宽度
         * @version Egret 2.4
         * @platform Web,Native
         */
        width: number;
        /**
         * 文本占用高度
         * @version Egret 2.4
         * @platform Web,Native
         */
        height: number;
        /**
         * 当前文本字符总数量（包括换行符）
         * @version Egret 2.4
         * @platform Web,Native
         */
        charNum: number;
        /**
         * 是否含有换行符
         * @version Egret 2.4
         * @platform Web,Native
         */
        hasNextLine: boolean;
        /**
         * 本行文本内容
         * @version Egret 2.4
         * @platform Web,Native
         */
        elements: Array<IWTextElement>;
    }
}
declare module egret {
    /**
     * @private
     * @version Egret 2.4
     * @platform Web,Native
     */
    class InputController extends HashObject {
        /**
         * @private
         */
        private stageText;
        /**
         * @private
         */
        private _text;
        /**
         * @private
         */
        private _isFocus;
        /**
         * @version Egret 2.4
         * @platform Web,Native
         */
        constructor();
        /**
         *
         * @param text
         * @version Egret 2.4
         * @platform Web,Native
         */
        init(text: TextField): void;
        /**
         * @private
         *
         */
        _addStageText(): void;
        /**
         * @private
         *
         */
        _removeStageText(): void;
        /**
         * @private
         *
         * @returns
         */
        _getText(): string;
        /**
         * @private
         *
         * @param value
         */
        _setText(value: string): void;
        /**
         * @private
         */
        _setColor(value: number): void;
        /**
         * @private
         *
         * @param event
         */
        private focusHandler(event);
        /**
         * @private
         *
         * @param event
         */
        private blurHandler(event);
        private tempStage;
        private onMouseDownHandler(event);
        $onFocus(): void;
        private onStageDownHandler(event);
        /**
         * @private
         *
         * @param event
         */
        private updateTextHandler(event);
        /**
         * @private
         *
         */
        private resetText();
        /**
         * @private
         *
         */
        _hideInput(): void;
        /**
         * @private
         *
         */
        private updateInput();
        /**
         * @private
         *
         */
        _updateProperties(): void;
    }
}
declare module egret {
    /**
     * @private
     * @version Egret 2.4
     * @platform Web,Native
     */
    interface StageText extends EventDispatcher {
        /**
         * @private
         */
        $textfield: egret.TextField;
        /**
         * @private
         *
         * @param textfield
         */
        $setTextField(textfield: egret.TextField): boolean;
        /**
         * @private
         *
         */
        $resetStageText(): void;
        /**
         * @private
         *
         * @returns
         */
        $getText(): string;
        /**
         * @private
         *
         * @param value
         */
        $setText(value: string): boolean;
        /**
         * @private
         *
         * @param value
         */
        $setColor(value: number): boolean;
        /**
         * @private
         *
         */
        $show(): void;
        /**
         * @private
         *
         */
        $hide(): void;
        /**
         * @private
         *
         */
        $addToStage(): void;
        /**
         * @private
         *
         */
        $removeFromStage(): void;
        /**
         * @private
         *
         */
        $onBlur(): void;
    }
    /**
     * @version Egret 2.4
     * @platform Web,Native
     */
    var StageText: {
        new (): StageText;
    };
}
declare module egret.sys {
    /**
     * @private
     */
    const enum TextKeys {
        /**
         * @private
         */
        fontSize = 0,
        /**
         * @private
         */
        lineSpacing = 1,
        /**
         * @private
         */
        textColor = 2,
        /**
         * @private
         */
        textFieldWidth = 3,
        /**
         * @private
         */
        textFieldHeight = 4,
        /**
         * @private
         */
        textWidth = 5,
        /**
         * @private
         */
        textHeight = 6,
        /**
         * @private
         */
        textDrawWidth = 7,
        /**
         * @private
         */
        fontFamily = 8,
        /**
         * @private
         */
        textAlign = 9,
        /**
         * @private
         */
        verticalAlign = 10,
        /**
         * @private
         */
        textColorString = 11,
        /**
         * @private
         */
        fontString = 12,
        /**
         * @private
         */
        text = 13,
        /**
         * @private
         */
        measuredWidths = 14,
        /**
         * @private
         */
        bold = 15,
        /**
         * @private
         */
        italic = 16,
        /**
         * @private
         */
        fontStringChanged = 17,
        /**
         * @private
         */
        textLinesChanged = 18,
        /**
         * @private
         */
        wordWrap = 19,
        /**
         * @private
         */
        displayAsPassword = 20,
        /**
         * @private
         */
        maxChars = 21,
        /**
         * @private
         */
        selectionActivePosition = 22,
        /**
         * @private
         */
        selectionAnchorPosition = 23,
        /**
         * @private
         */
        type = 24,
        /**
         * @private
         */
        strokeColor = 25,
        /**
         * @private
         */
        strokeColorString = 26,
        /**
         * @private
         */
        stroke = 27,
        /**
         * @private
         */
        scrollV = 28,
        /**
         * @private
         */
        numLines = 29,
        /**
         * @private
         */
        multiline = 30,
        /**
         * @private
         */
        border = 31,
        /**
         * @private
         */
        borderColor = 32,
        /**
         * @private
         */
        background = 33,
        /**
         * @private
         */
        backgroundColor = 34,
        /**
         * @private
         */
        restrictAnd = 35,
        /**
         * @private
         */
        restrictNot = 36,
        /**
         * @private
         */
        inputType = 37,
    }
}
declare module egret {
    
    /**
     * @language zh_CN
     * TextField是egret的文本渲染类，采用浏览器/设备的API进行渲染，在不同的浏览器/设备中由于字体渲染方式不一，可能会有渲染差异
     * 如果开发者希望所有平台完全无差异，请使用BitmapText
     * @see http://edn.egret.com/cn/docs/page/141 创建文本
     *
     * @event egret.Event.CHANGE 输入文本有用户输入时调度。
     * @event egret.FocusEvent.FOCUS_IN 聚焦输入文本后调度。
     * @event egret.FocusEvent.FOCUS_OUT 输入文本失去焦点后调度。
     * @version Egret 2.4
     * @platform Web,Native
     * @includeExample egret/text/TextField.ts
     */
    class TextField extends DisplayObject {
        
        /**
         * @language zh_CN
         * 默认文本字体
         * @version Egret 2.4
         * @platform Web,Native
         */
        static default_fontFamily: string;
        /**
         * @version Egret 2.4
         * @platform Web,Native
         */
        constructor();
        /**
         * @private
         */
        $TextField: Object;
        /**
         * @private
         */
        private isInput();
        $inputEnabled: boolean;
        $setTouchEnabled(value: boolean): boolean;
        
        /**
         * @language zh_CN
         * 要使用的字体的名称或用逗号分隔的字体名称列表。
         * @default "Arial"
         * @version Egret 2.4
         * @platform Web,Native
         */
        fontFamily: string;
        $setFontFamily(value: string): boolean;
        
        /**
         * @language zh_CN
         * 文本的字号大小。
         * @default 30
         * @version Egret 2.4
         * @platform Web,Native
         */
        size: number;
        $setSize(value: number): boolean;
        
        /**
         * @language zh_CN
         * 是否显示为粗体。
         * @default false
         * @version Egret 2.4
         * @platform Web,Native
         */
        bold: boolean;
        $setBold(value: boolean): boolean;
        
        /**
         * @language zh_CN
         * 是否显示为斜体。
         * @default false
         * @version Egret 2.4
         * @platform Web,Native
         */
        italic: boolean;
        $setItalic(value: boolean): boolean;
        /**
         * @private
         *
         */
        private invalidateFontString();
        
        /**
         * @language zh_CN
         * 文本的水平对齐方式。
         * @default：egret.HorizontalAlign.LEFT
         * @version Egret 2.4
         * @platform Web,Native
         */
        textAlign: string;
        $setTextAlign(value: string): boolean;
        
        /**
         * @language zh_CN
         * 文字的垂直对齐方式。
         * @default：egret.VerticalAlign.TOP
         * @version Egret 2.4
         * @platform Web,Native
         */
        verticalAlign: string;
        $setVerticalAlign(value: string): boolean;
        
        /**
         * @language zh_CN
         * 一个整数，表示行与行之间的垂直间距量
         * @default 0
         * @version Egret 2.4
         * @platform Web,Native
         */
        lineSpacing: number;
        $setLineSpacing(value: number): boolean;
        
        /**
         * @language zh_CN
         * 文本颜色
         * @default 0x000000
         * @version Egret 2.4
         * @platform Web,Native
         */
        textColor: number;
        $setTextColor(value: number): boolean;
        
        /**
         * @language zh_CN
         * 一个布尔值，表示文本字段是否按单词换行。如果值为 true，则该文本字段按单词换行；
         * 如果值为 false，则该文本字段按字符换行。
         * @default false
         * @version Egret 2.4
         * @platform Web,Native
         */
        wordWrap: boolean;
        /**
         * @private
         */
        private inputUtils;
        /**
         * @version Egret 2.4
         * @platform Web,Native
         */
        
        /**
         * @language zh_CN
         * 文本字段的类型。
         * 以下 TextFieldType 常量中的任一个：TextFieldType.DYNAMIC（指定用户无法编辑的动态文本字段），或 TextFieldType.INPUT（指定用户可以编辑的输入文本字段）。
         * @default egret.TextFieldType.DYNAMIC
         */
        type: string;
        /**
         * @private
         *
         * @param value
         */
        $setType(value: string): boolean;
        /**
         * @version Egret 3.1.2
         * @platform Web,Native
         */
        
        /**
         * @language zh_CN
         * 弹出键盘的类型。
         * TextFieldInputType 常量中的任一个。
         */
        inputType: string;
        /**
         * @version Egret 2.4
         * @platform Web,Native
         */
        
        /**
         * @language zh_CN
         * 作为文本字段中当前文本的字符串
         */
        text: string;
        /**
         * @private
         *
         * @returns
         */
        $getText(): string;
        /**
         * @private
         *
         * @param value
         */
        $setBaseText(value: string): boolean;
        /**
         * @private
         *
         * @param value
         */
        $setText(value: string): boolean;
        
        /**
         * @language zh_CN
         * 指定文本字段是否是密码文本字段。
         * 如果此属性的值为 true，则文本字段被视为密码文本字段，并使用星号而不是实际字符来隐藏输入的字符。如果为 false，则不会将文本字段视为密码文本字段。
         * @default false
         */
        displayAsPassword: boolean;
        /**
         * @private
         *
         * @param value
         */
        $setDisplayAsPassword(value: boolean): boolean;
        /**
         * @version Egret 2.4
         * @platform Web,Native
         */
        
        /**
         * @language zh_CN
         * 表示文本的描边颜色。
         * 包含三个 8 位 RGB 颜色成分的数字；例如，0xFF0000 为红色，0x00FF00 为绿色。
         * @default 0x000000
         */
        strokeColor: number;
        /**
         * @private
         *
         * @param value
         */
        $setStrokeColor(value: number): boolean;
        /**
         * @version Egret 2.4
         * @platform Web,Native
         */
        
        /**
         * @language zh_CN
         * 表示描边宽度。
         * 0为没有描边。
         * @default 0
         */
        stroke: number;
        /**
         * @private
         *
         * @param value
         */
        $setStroke(value: number): boolean;
        
        /**
         * @language zh_CN
         * 文本字段中最多可包含的字符数（即用户输入的字符数）。
         * 脚本可以插入比 maxChars 允许的字符数更多的文本；maxChars 属性仅表示用户可以输入多少文本。如果此属性的值为 0，则用户可以输入无限数量的文本。
         * @default 0
         */
        maxChars: number;
        /**
         * @private
         *
         * @param value
         */
        $setMaxChars(value: number): boolean;
        /**
         * @version Egret 2.4
         * @platform Web,Native
         */
        
        /**
         * @language zh_CN
         * 文本在文本字段中的垂直位置。scrollV 属性可帮助用户定位到长篇文章的特定段落，还可用于创建滚动文本字段。
         * 垂直滚动的单位是行，而水平滚动的单位是像素。
         * 如果显示的第一行是文本字段中的第一行，则 scrollV 设置为 1（而非 0）。
         */
        scrollV: number;
        
        /**
         * @language zh_CN
         * scrollV 的最大值
         * @version Egret 2.4
         * @platform Web,Native
         */
        maxScrollV: number;
        /**
         * @private
         * @version Egret 2.4
         * @platform Web,Native
         */
        selectionBeginIndex: number;
        /**
         * @private
         * @version Egret 2.4
         * @platform Web,Native
         */
        selectionEndIndex: number;
        /**
         * @private
         * @version Egret 2.4
         * @platform Web,Native
         */
        caretIndex: number;
        /**
         * @private
         *
         * @param beginIndex
         * @param endIndex
         */
        $setSelection(beginIndex: number, endIndex: number): boolean;
        /**
         * @private
         *
         * @returns
         */
        $getLineHeight(): number;
        
        /**
         * @language zh_CN
         * 文本行数。
         * @version Egret 2.4
         * @platform Web,Native
         */
        numLines: number;
        
        /**
         * @language zh_CN
         * 表示字段是否为多行文本字段。注意，此属性仅在type为TextFieldType.INPUT时才有效。
         * 如果值为 true，则文本字段为多行文本字段；如果值为 false，则文本字段为单行文本字段。在类型为 TextFieldType.INPUT 的字段中，multiline 值将确定 Enter 键是否创建新行（如果值为 false，则将忽略 Enter 键）。
         * @default false
         */
        multiline: boolean;
        /**
         * @private
         *
         * @param value
         */
        $setMultiline(value: boolean): boolean;
        
        /**
         * @language zh_CN
         * 表示用户可输入到文本字段中的字符集。如果 restrict 属性的值为 null，则可以输入任何字符。如果 restrict 属性的值为空字符串，则不能输入任何字符。如果 restrict 属性的值为一串字符，则只能在文本字段中输入该字符串中的字符。从左向右扫描该字符串。可以使用连字符 (-) 指定一个范围。只限制用户交互；脚本可将任何文本放入文本字段中。<br/>
         * 如果字符串以尖号 (^) 开头，则先接受所有字符，然后从接受字符集中排除字符串中 ^ 之后的字符。如果字符串不以尖号 (^) 开头，则最初不接受任何字符，然后将字符串中的字符包括在接受字符集中。<br/>
         * 下例仅允许在文本字段中输入大写字符、空格和数字：<br/>
         * my_txt.restrict = "A-Z 0-9";<br/>
         * 下例包含除小写字母之外的所有字符：<br/>
         * my_txt.restrict = "^a-z";<br/>
         * 如果需要输入字符 \ ^，请使用2个反斜杠 "\\-" "\\^" ：<br/>
         * 可在字符串中的任何位置使用 ^，以在包含字符与排除字符之间进行切换，但是最多只能有一个 ^ 用来排除。下面的代码只包含除大写字母 Q 之外的大写字母：<br/>
         * my_txt.restrict = "A-Z^Q";<br/>
         * @version Egret 2.4
         * @platform Web,Native
         * @default null
         */
        restrict: string;
        /**
         * @private
         *
         * @param value
         */
        $setWidth(value: number): boolean;
        /**
         * @private
         *
         * @param value
         */
        $setHeight(value: number): boolean;
        /**
         * @private
         * 获取显示宽度
         */
        $getWidth(): number;
        /**
         * @private
         * 获取显示宽度
         */
        $getHeight(): number;
        /**
         * @private
         */
        private textNode;
        /**
         * @private
         */
        private graphicsNode;
        /**
         * @version Egret 2.4
         * @platform Web,Native
         */
        
        /**
         * @language zh_CN
         * 指定文本字段是否具有边框。
         * 如果为 true，则文本字段具有边框。如果为 false，则文本字段没有边框。
         * 使用 borderColor 属性来设置边框颜色。
         * @default false
         */
        border: boolean;
        /**
         * @version Egret 2.4
         * @platform Web,Native
         */
        
        /**
         * @language zh_CN
         * 文本字段边框的颜色。
         * 即使当前没有边框，也可检索或设置此属性，但只有当文本字段已将 border 属性设置为 true 时，才可以看到颜色。
         * @default 0x000000
         */
        borderColor: number;
        /**
         * @version Egret 2.4
         * @platform Web,Native
         */
        
        /**
         * @language zh_CN
         * 指定文本字段是否具有背景填充。
         * 如果为 true，则文本字段具有背景填充。如果为 false，则文本字段没有背景填充。
         * 使用 backgroundColor 属性来设置文本字段的背景颜色。
         * @default false
         */
        background: boolean;
        /**
         * @version Egret 2.4
         * @platform Web,Native
         */
        
        /**
         * @language zh_CN
         * 文本字段背景的颜色。
         * 即使当前没有背景，也可检索或设置此属性，但只有当文本字段已将 background 属性设置为 true 时，才可以看到颜色。
         * @default 0xFFFFFF
         */
        backgroundColor: number;
        /**
         * @private
         *
         */
        private fillBackground(lines);
        
        /**
         * @language zh_CN
         * 输入文本自动进入到输入状态，仅在类型是输入文本并且是在用户交互下才可以调用。
         * @version Egret 3.0.8
         * @platform Web,Native
         */
        setFocus(): void;
        /**
         * @private
         *
         */
        $onRemoveFromStage(): void;
        /**
         * @private
         *
         * @param stage
         * @param nestLevel
         */
        $onAddToStage(stage: Stage, nestLevel: number): void;
        /**
         * 不能重写$invalidateContentBounds，因为内部graphics调用clear时会触发$invalidateContentBounds这狗方法，从而导致死循环。
         */
        $invalidateTextField(): void;
        $update(bounds?: Rectangle): boolean;
        $getRenderBounds(): Rectangle;
        /**
         * @private
         */
        $measureContentBounds(bounds: Rectangle): void;
        /**
         * @private
         * @see egret.DisplayObject._render
         * @param renderContext
         */
        $render(): void;
        /**
         * @private
         */
        private isFlow;
        /**
         * @version Egret 2.4
         * @platform Web,Native
         */
        
        /**
         * @language zh_CN
         * 设置富文本
         * @see http://edn.egret.com/cn/index.php/article/index/id/146
         */
        textFlow: Array<egret.ITextElement>;
        /**
         * @private
         *
         * @param text
         * @returns
         */
        private changeToPassText(text);
        /**
         * @private
         */
        private textArr;
        /**
         * @private
         *
         * @param textArr
         */
        private setMiddleStyle(textArr);
        
        /**
         * @language zh_CN
         * 获取文本测量宽度
         * @version Egret 2.4
         * @platform Web,Native
         */
        textWidth: number;
        
        /**
         * @language zh_CN
         * 获取文本测量高度
         * @version Egret 2.4
         * @platform Web,Native
         */
        textHeight: number;
        /**
         * @private
         * @param text
         * @version Egret 2.4
         * @platform Web,Native
         */
        appendText(text: string): void;
        /**
         * @private
         * @param element
         * @version Egret 2.4
         * @platform Web,Native
         */
        appendElement(element: egret.ITextElement): void;
        /**
         * @private
         */
        private linesArr;
        /**
         * @private
         *
         * @returns
         */
        $getLinesArr(): Array<egret.ILineElement>;
        /**
         * @private
         */
        $isTyping: boolean;
        /**
         * @private
         * 返回要绘制的下划线列表
         */
        private drawText();
        private addEvent();
        private removeEvent();
        private onTapHandler(e);
    }
}
declare module egret {
    
    /**
     * @language zh_CN
     * TextFieldInputType 类是在设置 TextField 类的 inputType 属性时使用的常数值的枚举。
     * @version Egret 3.1.2
     * @platform Web,Native
     */
    class TextFieldInputType {
        
        /**
         * @language zh_CN
         * 默认 input 类型
         * @version Egret 3.1.2
         * @platform Web,Native
         */
        static TEXT: string;
        
        /**
         * @language zh_CN
         * 电话号码 input 类型
         * @version Egret 3.1.2
         * @platform Web,Native
         */
        static TEL: string;
        
        /**
         * @language zh_CN
         * password 类型
         * @version Egret 3.1.2
         * @platform Web,Native
         */
        static PASSWORD: string;
    }
}
declare module egret {
    
    /**
     * @language zh_CN
     * TextFieldType 类是在设置 TextField 类的 type 属性时使用的常数值的枚举。
     * @version Egret 2.4
     * @platform Web,Native
     */
    class TextFieldType {
        
        /**
         * @language zh_CN
         * 用于指定动态文本
         * @version Egret 2.4
         * @platform Web,Native
         */
        static DYNAMIC: string;
        
        /**
         * @language zh_CN
         * 用于指定输入文本
         * @version Egret 2.4
         * @platform Web,Native
         */
        static INPUT: string;
    }
}
declare module egret {
    /**
     * @private
     * @version Egret 2.4
     * @platform Web,Native
     */
    class TextFieldUtils {
        /**
         * 获取第一个绘制的行数
         * @param textfield 文本
         * @returns {number} 行数，从0开始
         * @private
         */
        static $getStartLine(textfield: egret.TextField): number;
        /**
         * 获取水平比例
         * @param textfield 文本
         * @returns {number} 水平比例
         * @private
         */
        static $getHalign(textfield: egret.TextField): number;
        /**
         * @private
         *
         * @param textfield
         * @returns
         */
        static $getTextHeight(textfield: egret.TextField): number;
        /**
         * 获取垂直比例
         * @param textfield 文本
         * @returns {number} 垂直比例
         * @private
         */
        static $getValign(textfield: egret.TextField): number;
        /**
         * 根据x、y获取文本项
         * @param textfield 文本
         * @param x x坐标值
         * @param y y坐标值
         * @returns 文本单项
         * @private
         */
        static $getTextElement(textfield: egret.TextField, x: number, y: number): ITextElement;
        /**
         * 获取文本点击块
         * @param textfield 文本
         * @param x x坐标值
         * @param y y坐标值
         * @returns 文本点击块
         * @private
         */
        static $getHit(textfield: egret.TextField, x: number, y: number): IHitTextElement;
        /**
         * 获取当前显示多少行
         * @param textfield 文本
         * @returns {number} 显示的行数
         * @private
         */
        static $getScrollNum(textfield: egret.TextField): number;
    }
}
declare module egret.sys {
    /**
     * 测量文本在指定样式下的宽度。
     * @param text 要测量的文本内容。
     * @param fontFamily 字体名称
     * @param fontSize 字体大小
     * @param bold 是否粗体
     * @param italic 是否斜体
     */
    var measureText: (text: string, fontFamily: string, fontSize: number, bold: boolean, italic: boolean) => number;
}
declare module egret {
    
    /**
     * @language zh_CN
     * VerticalAlign 类为垂直对齐方式定义可能的值。
     * @see egret.TextField#verticalAlign
     * @version Egret 2.4
     * @platform Web,Native
     */
    class VerticalAlign {
        
        /**
         * @language zh_CN
         * 将内容与容器的顶部对齐。
         * @version Egret 2.4
         * @platform Web,Native
         */
        static TOP: string;
        
        /**
         * @language zh_CN
         * 将内容与容器的底部对齐。
         * @version Egret 2.4
         * @platform Web,Native
         */
        static BOTTOM: string;
        
        /**
         * @language zh_CN
         * 在容器的垂直中心对齐内容。
         * @version Egret 2.4
         * @platform Web,Native
         */
        static MIDDLE: string;
        
        /**
         * @language zh_CN
         * 垂直两端对齐
         * 注意：TextFiled不支持此对齐方式。
         * @version Egret 2.4
         * @platform Web,Native
         */
        static JUSTIFY: string;
        
        /**
         * @language zh_CN
         * 相对于容器对子项进行内容对齐。这会将所有子项的大小统一调整为容器的"内容高度"。
         * 容器的"内容高度"是最大子项的大小,如果所有子项都小于容器的高度，则会将所有子项的大小调整为容器的高度。
         * 注意：TextFiled不支持此对齐方式。
         * @version Egret 2.4
         * @platform Web,Native
         */
        static CONTENT_JUSTIFY: string;
    }
}
declare module egret {
    
    /**
     * @language zh_CN
     * Endian 类中包含一些值，它们表示用于表示多字节数字的字节顺序。
     * 字节顺序为 bigEndian（最高有效字节位于最前）或 littleEndian（最低有效字节位于最前）。
     * @version Egret 2.4
     * @platform Web,Native
     */
    class Endian {
        
        /**
         * @language zh_CN
         * 表示多字节数字的最低有效字节位于字节序列的最前面。
         * 十六进制数字 0x12345678 包含 4 个字节（每个字节包含 2 个十六进制数字）。最高有效字节为 0x12。最低有效字节为 0x78。（对于等效的十进制数字 305419896，最高有效数字是 3，最低有效数字是 6）。
         * @version Egret 2.4
         * @platform Web,Native
         */
        static LITTLE_ENDIAN: string;
        
        /**
         * @language zh_CN
         * 表示多字节数字的最高有效字节位于字节序列的最前面。
         * 十六进制数字 0x12345678 包含 4 个字节（每个字节包含 2 个十六进制数字）。最高有效字节为 0x12。最低有效字节为 0x78。（对于等效的十进制数字 305419896，最高有效数字是 3，最低有效数字是 6）。
         * @version Egret 2.4
         * @platform Web,Native
         */
        static BIG_ENDIAN: string;
    }
    
    /**
     * @language zh_CN
     * ByteArray 类提供用于优化读取、写入以及处理二进制数据的方法和属性。
     * 注意：ByteArray 类适用于需要在字节层访问数据的高级开发人员。
     * @version Egret 2.4
     * @platform Web,Native
     * @includeExample egret/utils/ByteArray.ts
     */
    class ByteArray {
        /**
         * @private
         */
        private static SIZE_OF_BOOLEAN;
        /**
         * @private
         */
        private static SIZE_OF_INT8;
        /**
         * @private
         */
        private static SIZE_OF_INT16;
        /**
         * @private
         */
        private static SIZE_OF_INT32;
        /**
         * @private
         */
        private static SIZE_OF_UINT8;
        /**
         * @private
         */
        private static SIZE_OF_UINT16;
        /**
         * @private
         */
        private static SIZE_OF_UINT32;
        /**
         * @private
         */
        private static SIZE_OF_FLOAT32;
        /**
         * @private
         */
        private static SIZE_OF_FLOAT64;
        /**
         * @private
         */
        private BUFFER_EXT_SIZE;
        private data;
        /**
         * @private
         */
        private _position;
        /**
         * @private
         */
        private write_position;
        
        /**
         * @language zh_CN
         * 更改或读取数据的字节顺序；egret.Endian.BIG_ENDIAN 或 egret.Endian.LITTLE_ENDIAN。
         * @default egret.Endian.BIG_ENDIAN
         * @version Egret 2.4
         * @platform Web,Native
         */
        endian: string;
        /**
         * @version Egret 2.4
         * @platform Web,Native
         */
        constructor(buffer?: ArrayBuffer);
        /**
         * @private
         * @param buffer
         */
        private _setArrayBuffer(buffer);
        /**
         * @deprecated
         * @version Egret 2.4
         * @platform Web,Native
         */
        setArrayBuffer(buffer: ArrayBuffer): void;
        /**
         * @private
         */
        buffer: ArrayBuffer;
        /**
         * @private
         * @version Egret 2.4
         * @platform Web,Native
         */
        /**
         * @private
         */
        dataView: DataView;
        /**
         * @private
         */
        bufferOffset: number;
        
        /**
         * @language zh_CN
         * 将文件指针的当前位置（以字节为单位）移动或返回到 ByteArray 对象中。下一次调用读取方法时将在此位置开始读取，或者下一次调用写入方法时将在此位置开始写入。
         * @version Egret 2.4
         * @platform Web,Native
         */
        position: number;
        
        /**
         * @language zh_CN
         * ByteArray 对象的长度（以字节为单位）。
         * 如果将长度设置为大于当前长度的值，则用零填充字节数组的右侧。
         * 如果将长度设置为小于当前长度的值，将会截断该字节数组。
         * @version Egret 2.4
         * @platform Web,Native
         */
        length: number;
        
        /**
         * @language zh_CN
         * 可从字节数组的当前位置到数组末尾读取的数据的字节数。
         * 每次访问 ByteArray 对象时，将 bytesAvailable 属性与读取方法结合使用，以确保读取有效的数据。
         * @version Egret 2.4
         * @platform Web,Native
         */
        bytesAvailable: number;
        
        /**
         * @language zh_CN
         * 清除字节数组的内容，并将 length 和 position 属性重置为 0。

         * @version Egret 2.4
         * @platform Web,Native
         */
        clear(): void;
        
        /**
         * @language zh_CN
         * 从字节流中读取布尔值。读取单个字节，如果字节非零，则返回 true，否则返回 false
         * @return 如果字节不为零，则返回 true，否则返回 false
         * @version Egret 2.4
         * @platform Web,Native
         */
        readBoolean(): boolean;
        
        /**
         * @language zh_CN
         * 从字节流中读取带符号的字节
         * @return 介于 -128 和 127 之间的整数
         * @version Egret 2.4
         * @platform Web,Native
         */
        readByte(): number;
        
        /**
         * @language zh_CN
         * 从字节流中读取 length 参数指定的数据字节数。从 offset 指定的位置开始，将字节读入 bytes 参数指定的 ByteArray 对象中，并将字节写入目标 ByteArray 中
         * @param bytes 要将数据读入的 ByteArray 对象
         * @param offset bytes 中的偏移（位置），应从该位置写入读取的数据
         * @param length 要读取的字节数。默认值 0 导致读取所有可用的数据
         * @version Egret 2.4
         * @platform Web,Native
         */
        readBytes(bytes: ByteArray, offset?: number, length?: number): void;
        
        /**
         * @language zh_CN
         * 从字节流中读取一个 IEEE 754 双精度（64 位）浮点数
         * @return 双精度（64 位）浮点数
         * @version Egret 2.4
         * @platform Web,Native
         */
        readDouble(): number;
        
        /**
         * @language zh_CN
         * 从字节流中读取一个 IEEE 754 单精度（32 位）浮点数
         * @return 单精度（32 位）浮点数
         * @version Egret 2.4
         * @platform Web,Native
         */
        readFloat(): number;
        
        /**
         * @language zh_CN
         * 从字节流中读取一个带符号的 32 位整数
         * @return 介于 -2147483648 和 2147483647 之间的 32 位带符号整数
         * @version Egret 2.4
         * @platform Web,Native
         */
        readInt(): number;
        
        /**
         * @language zh_CN
         * 从字节流中读取一个带符号的 16 位整数
         * @return 介于 -32768 和 32767 之间的 16 位带符号整数
         * @version Egret 2.4
         * @platform Web,Native
         */
        readShort(): number;
        
        /**
         * @language zh_CN
         * 从字节流中读取无符号的字节
         * @return 介于 0 和 255 之间的 32 位无符号整数
         * @version Egret 2.4
         * @platform Web,Native
         */
        readUnsignedByte(): number;
        
        /**
         * @language zh_CN
         * 从字节流中读取一个无符号的 32 位整数
         * @return 介于 0 和 4294967295 之间的 32 位无符号整数
         * @version Egret 2.4
         * @platform Web,Native
         */
        readUnsignedInt(): number;
        
        /**
         * @language zh_CN
         * 从字节流中读取一个无符号的 16 位整数
         * @return 介于 0 和 65535 之间的 16 位无符号整数
         * @version Egret 2.4
         * @platform Web,Native
         */
        readUnsignedShort(): number;
        
        /**
         * @language zh_CN
         * 从字节流中读取一个 UTF-8 字符串。假定字符串的前缀是无符号的短整型（以字节表示长度）
         * @return UTF-8 编码的字符串
         * @version Egret 2.4
         * @platform Web,Native
         */
        readUTF(): string;
        
        /**
         * @language zh_CN
         * 从字节流中读取一个由 length 参数指定的 UTF-8 字节序列，并返回一个字符串
         * @param length 指明 UTF-8 字节长度的无符号短整型数
         * @return 由指定长度的 UTF-8 字节组成的字符串
         * @version Egret 2.4
         * @platform Web,Native
         */
        readUTFBytes(length: number): string;
        
        /**
         * @language zh_CN
         * 写入布尔值。根据 value 参数写入单个字节。如果为 true，则写入 1，如果为 false，则写入 0
         * @param value 确定写入哪个字节的布尔值。如果该参数为 true，则该方法写入 1；如果该参数为 false，则该方法写入 0
         * @version Egret 2.4
         * @platform Web,Native
         */
        writeBoolean(value: boolean): void;
        
        /**
         * @language zh_CN
         * 在字节流中写入一个字节
         * 使用参数的低 8 位。忽略高 24 位
         * @param value 一个 32 位整数。低 8 位将被写入字节流
         * @version Egret 2.4
         * @platform Web,Native
         */
        writeByte(value: number): void;
        
        /**
         * @language zh_CN
         * 将指定字节数组 bytes（起始偏移量为 offset，从零开始的索引）中包含 length 个字节的字节序列写入字节流
         * 如果省略 length 参数，则使用默认长度 0；该方法将从 offset 开始写入整个缓冲区。如果还省略了 offset 参数，则写入整个缓冲区
         * 如果 offset 或 length 超出范围，它们将被锁定到 bytes 数组的开头和结尾
         * @param bytes ByteArray 对象
         * @param offset 从 0 开始的索引，表示在数组中开始写入的位置
         * @param length 一个无符号整数，表示在缓冲区中的写入范围
         * @version Egret 2.4
         * @platform Web,Native
         */
        writeBytes(bytes: ByteArray, offset?: number, length?: number): void;
        
        /**
         * @language zh_CN
         * 在字节流中写入一个 IEEE 754 双精度（64 位）浮点数
         * @param value 双精度（64 位）浮点数
         * @version Egret 2.4
         * @platform Web,Native
         */
        writeDouble(value: number): void;
        
        /**
         * @language zh_CN
         * 在字节流中写入一个 IEEE 754 单精度（32 位）浮点数
         * @param value 单精度（32 位）浮点数
         * @version Egret 2.4
         * @platform Web,Native
         */
        writeFloat(value: number): void;
        
        /**
         * @language zh_CN
         * 在字节流中写入一个带符号的 32 位整数
         * @param value 要写入字节流的整数
         * @version Egret 2.4
         * @platform Web,Native
         */
        writeInt(value: number): void;
        
        /**
         * @language zh_CN
         * 在字节流中写入一个 16 位整数。使用参数的低 16 位。忽略高 16 位
         * @param value 32 位整数，该整数的低 16 位将被写入字节流
         * @version Egret 2.4
         * @platform Web,Native
         */
        writeShort(value: number): void;
        
        /**
         * @language zh_CN
         * 在字节流中写入一个无符号的 32 位整数
         * @param value 要写入字节流的无符号整数
         * @version Egret 2.4
         * @platform Web,Native
         */
        writeUnsignedInt(value: number): void;
        
        /**
         * @language zh_CN
         * 在字节流中写入一个无符号的 16 位整数
         * @param value 要写入字节流的无符号整数
         * @version Egret 2.5
         * @platform Web,Native
         */
        writeUnsignedShort(value: number): void;
        
        /**
         * @language zh_CN
         * 将 UTF-8 字符串写入字节流。先写入以字节表示的 UTF-8 字符串长度（作为 16 位整数），然后写入表示字符串字符的字节
         * @param value 要写入的字符串值
         * @version Egret 2.4
         * @platform Web,Native
         */
        writeUTF(value: string): void;
        
        /**
         * @language zh_CN
         * 将 UTF-8 字符串写入字节流。类似于 writeUTF() 方法，但 writeUTFBytes() 不使用 16 位长度的词为字符串添加前缀
         * @param value 要写入的字符串值
         * @version Egret 2.4
         * @platform Web,Native
         */
        writeUTFBytes(value: string): void;
        /**
         *
         * @returns
         * @version Egret 2.4
         * @platform Web,Native
         */
        toString(): string;
        /**
         * @private
         * 将 Uint8Array 写入字节流
         * @param bytes 要写入的Uint8Array
         * @param validateBuffer
         */
        _writeUint8Array(bytes: Uint8Array, validateBuffer?: boolean): void;
        /**
         * @param len
         * @returns
         * @version Egret 2.4
         * @platform Web,Native
         * @private
         */
        validate(len: number): boolean;
        /**********************/
        /**********************/
        /**
         * @private
         * @param len
         * @param needReplace
         */
        private validateBuffer(len, needReplace?);
        /**
         * @private
         * UTF-8 Encoding/Decoding
         */
        private encodeUTF8(str);
        /**
         * @private
         *
         * @param data
         * @returns
         */
        private decodeUTF8(data);
        /**
         * @private
         *
         * @param code_point
         */
        private encoderError(code_point);
        /**
         * @private
         *
         * @param fatal
         * @param opt_code_point
         * @returns
         */
        private decoderError(fatal, opt_code_point?);
        /**
         * @private
         */
        private EOF_byte;
        /**
         * @private
         */
        private EOF_code_point;
        /**
         * @private
         *
         * @param a
         * @param min
         * @param max
         */
        private inRange(a, min, max);
        /**
         * @private
         *
         * @param n
         * @param d
         */
        private div(n, d);
        /**
         * @private
         *
         * @param string
         */
        private stringToCodePoints(string);
    }
}
declare module egret {
    
    /**
     * @language zh_CN
     * Logger是引擎的日志处理模块入口
     * @version Egret 2.4
     * @platform Web,Native
     */
    class Logger {
        
        /**
         * @language zh_CN
         * 全开
         * @version Egret 2.4
         * @platform Web,Native
         */
        static ALL: string;
        
        /**
         * @language zh_CN
         * 等级为 DEBUG
         * @version Egret 2.4
         * @platform Web,Native
         */
        static DEBUG: string;
        
        /**
         * @language zh_CN
         * 等级为 INFO
         * @version Egret 2.4
         * @platform Web,Native
         */
        static INFO: string;
        
        /**
         * @language zh_CN
         * 等级为 WARN
         * @version Egret 2.4
         * @platform Web,Native
         */
        static WARN: string;
        
        /**
         * @language zh_CN
         * 等级为 ERROR
         * @version Egret 2.4
         * @platform Web,Native
         */
        static ERROR: string;
        
        /**
         * @language zh_CN
         * 全关
         * @version Egret 2.4
         * @platform Web,Native
         */
        static OFF: string;
        
        /**
         * @language zh_CN
         * 设置当前需要开启的log级别。级别等级分别为：ALL < DEBUG < INFO < WARN < ERROR < OFF<br/>
         * 此功能只在 DEBUG 模式下才生效。<br/>
         * <ul>
         * <li>Logger.ALL -- 所有等级的log都可以打印出来。</li>
         * <li>Logger.DEBUG -- 可以打印debug、info、log、warn、error。</li>
         * <li>Logger.INFO -- 可以打印info、log、warn、error。</li>
         * <li>Logger.WARN -- 可以打印warn、error。</li>
         * <li>Logger.ERROR -- 可以打印error。</li>
         * <li>Logger.OFF -- 全部关闭。</li>
         * </ul>
         * @param logType 从这个等级开始打印。
         * @version Egret 2.4
         * @platform Web,Native
         */
        static logLevel: string;
    }
}
declare module egret {
    /**
     * @version Egret 2.4
     * @platform Web,Native
     */
    class NumberUtils {
        
        /**
         * @language zh_CN
         * 判断是否是数值
         * @param value 需要判断的参数
         * @returns
         * @version Egret 2.4
         * @platform Web,Native
         */
        static isNumber(value: any): boolean;
        
        /**
         * @language zh_CN
         * 得到对应角度值的sin近似值
         * @param value {number} 角度值
         * @returns {number} sin值
         * @version Egret 2.4
         * @platform Web,Native
         */
        static sin(value: number): number;
        /**
         * @private
         *
         * @param value
         * @returns
         */
        private static sinInt(value);
        
        /**
         * @language zh_CN
         * 得到对应角度值的cos近似值
         * @param value {number} 角度值
         * @returns {number} cos值
         * @version Egret 2.4
         * @platform Web,Native
         */
        static cos(value: number): number;
        /**
         * @private
         *
         * @param value
         * @returns
         */
        private static cosInt(value);
    }
}
declare var egret_sin_map: {};
declare var egret_cos_map: {};
declare var DEG_TO_RAD: number;
declare module egret {
    
    /**
     * @language zh_CN
     * Timer 类是计时器的接口，它使您能按指定的时间序列运行代码。
     * 使用 start() 方法来启动计时器。为 timer 事件添加事件侦听器，以便将代码设置为按计时器间隔运行。
     * 可以创建 Timer 对象以运行一次或按指定间隔重复运行，从而按计划执行代码。
     * 根据 Egret 的帧速率或运行时环境（可用内存和其他因素），运行时调度事件的间隔可能稍有不同。
     * @see egret.TimerEvent
     * @version Egret 2.4
     * @platform Web,Native
     * @includeExample egret/utils/Timer.ts
     */
    class Timer extends EventDispatcher {
        
        /**
         * @language zh_CN
         * 使用指定的 delay 和 repeatCount 状态构造新的 Timer 对象。
         * @param delay 计时器事件间的延迟（以毫秒为单位）。建议 delay 不要低于 20 毫秒。计时器频率不得超过 60 帧/秒，这意味着低于 16.6 毫秒的延迟可导致出现运行时问题。
         * @param repeatCount 指定重复次数。如果为零，则计时器将持续不断重复运行。如果不为 0，则将运行计时器，运行次数为指定的次数，然后停止。
         * @version Egret 2.4
         * @platform Web,Native
         */
        constructor(delay: number, repeatCount?: number);
        /**
         * @private
         */
        private _delay;
        
        /**
         * @language zh_CN
         * 计时器事件间的延迟（以毫秒为单位）。如果在计时器正在运行时设置延迟间隔，则计时器将按相同的 repeatCount 迭代重新启动。<br/>
         * 注意：建议 delay 不要低于 20 毫秒。计时器频率不得超过 60 帧/秒，这意味着低于 16.6 毫秒的延迟可导致出现运行时问题。
         * @version Egret 2.4
         * @platform Web,Native
         */
        delay: number;
        
        /**
         * @language zh_CN
         * 设置的计时器运行总次数。如果重复计数设置为 0，则计时器将持续不断运行，或直至调用了 stop() 方法或节目停止。
         * 如果重复计数不为 0，则将运行计时器，运行次数为指定的次数。如果设置的 repeatCount 总数等于或小于 currentCount，则计时器将停止并且不会再次触发。
         * @version Egret 2.4
         * @platform Web,Native
         */
        repeatCount: number;
        /**
         * @private
         */
        private _currentCount;
        
        /**
         * @language zh_CN
         * 计时器从 0 开始后触发的总次数。如果已重置了计时器，则只会计入重置后的触发次数。
         * @version Egret 2.4
         * @platform Web,Native
         */
        currentCount: number;
        /**
         * @private
         */
        private _running;
        
        /**
         * @language zh_CN
         * 计时器的当前状态；如果计时器正在运行，则为 true，否则为 false。
         * @version Egret 2.4
         * @platform Web,Native
         */
        running: boolean;
        
        /**
         * @language zh_CN
         * 如果计时器正在运行，则停止计时器，并将 currentCount 属性设回为 0，这类似于秒表的重置按钮。然后，在调用 start() 后，将运行计时器实例，运行次数为指定的重复次数（由 repeatCount 值设置）。
         * @version Egret 2.4
         * @platform Web,Native
         */
        reset(): void;
        
        /**
         * @language zh_CN
         * 如果计时器尚未运行，则启动计时器。
         * @version Egret 2.4
         * @platform Web,Native
         */
        start(): void;
        
        /**
         * @language zh_CN
         * 停止计时器。如果在调用 stop() 后调用 start()，则将继续运行计时器实例，运行次数为剩余的 重复次数（由 repeatCount 属性设置）。
         * @version Egret 2.4
         * @platform Web,Native
         */
        stop(): void;
        /**
         * @private
         */
        private updateInterval;
        /**
         * @private
         */
        private lastCount;
        /**
         * @private
         * Ticker以60FPS频率刷新此方法
         */
        $update(timeStamp: number): boolean;
    }
}
declare module egret {
    
    /**
     * @language zh_CN
     * XML节点基类
     * @version Egret 2.4
     * @platform Web,Native
     */
    interface XMLNode {
        
        /**
         * @language zh_CN
         * 节点类型，1：XML，2：XMLAttribute，3：XMLText
         * @version Egret 2.4
         * @platform Web,Native
         */
        nodeType: number;
        
        /**
         * @language zh_CN
         * 节点所属的父级节点
         * @version Egret 2.4
         * @platform Web,Native
         */
        parent: XML;
    }
    
    /**
     * @language zh_CN
     * XML 类包含用于处理 XML 对象的属性。
     * @version Egret 2.4
     * @platform Web,Native
     * @includeExample egret/utils/XML.ts
     */
    interface XML extends XMLNode {
        
        /**
         * @language zh_CN
         * 当前节点上的属性列表
         * @version Egret 2.4
         * @platform Web,Native
         */
        attributes: any;
        
        /**
         * @language zh_CN
         * 当前节点的子节点列表
         * @version Egret 2.4
         * @platform Web,Native
         */
        children: XMLNode[];
        
        /**
         * @language zh_CN
         * 节点完整名称。例如节点 <s:Button/> 的 name 为："s:Button"
         * @version Egret 2.4
         * @platform Web,Native
         */
        name: string;
        
        /**
         * @language zh_CN
         * 节点的命名空间前缀。例如节点 <s:Button/> 的 prefix 为：s
         * @version Egret 2.4
         * @platform Web,Native
         */
        prefix: string;
        
        /**
         * @language zh_CN
         * 节点的本地名称。例如节点 <s:Button/> 的 localName 为：Button
         * @version Egret 2.4
         * @platform Web,Native
         */
        localName: string;
        
        /**
         * @language zh_CN
         * 节点的命名空间地址。例如节点 <s:Skin xmlns:s="http://ns.egret.com/eui"/> 的 namespace 为： http://ns.egret.com/eui
         * @version Egret 2.4
         * @platform Web,Native
         */
        namespace: string;
    }
    
    /**
     * @language zh_CN
     * XMLText 类表示在XML中的文本节点
     * @version Egret 2.4
     * @platform Web,Native
     */
    interface XMLText extends XMLNode {
        
        /**
         * @language zh_CN
         * 文本内容
         * @version Egret 2.4
         * @platform Web,Native
         */
        text: string;
    }
    
    /**
     * @language zh_CN
     * XML 类包含用于处理 XML 对象的属性。
     * @version Egret 2.4
     * @platform Web,Native
     */
    var XML: {
        
        /**
         * @language zh_CN
         * 解析字符串为XML对象
         * @param text 要解析的XML对象。
         */
        parse(text: string): XML;
    };
}
declare module egret {
    /**
     * @private
     */
    var $callLaterFunctionList: Array<any>;
    /**
     * @private
     */
    var $callLaterThisList: Array<any>;
    /**
     * @private
     */
    var $callLaterArgsList: Array<any>;
    
    /**
     * @language zh_CN
     * 延迟函数到屏幕重绘前执行。
     * @param method {Function} 要延迟执行的函数
     * @param thisObject {any} 回调函数的this引用
     * @param ...args {any} 函数参数列表
     * @version Egret 2.4
     * @platform Web,Native
     * @includeExample egret/utils/callLater.ts
     */
    function callLater(method: Function, thisObject: any, ...args: any[]): void;
    /**
     * @private
     */
    var $callAsyncFunctionList: Array<any>;
    /**
     * @private
     */
    var $callAsyncThisList: Array<any>;
    /**
     * @private
     */
    var $callAsyncArgsList: Array<any>;
    /**
     * 异步调用函数
     * @param method {Function} 要异步调用的函数
     * @param thisObject {any} 函数的this引用
     * @param ...args {any} 函数参数列表
     * @private
     */
    function $callAsync(method: Function, thisObject: any, ...args: any[]): void;
}
declare module egret {
    
    /**
     * @language zh_CN
     * 调用父类的setter属性，代替其他语言的写法，如 super.alpha = 1;
     * @param thisObj 当前对象。永远都this
     * @param currentClass 当前 class 类名，非字符串
     * @param type 需要调用的setter属性名称
     * @param values 传给父类的值
     *
     * @exmaple egret.superSetter(egret.Sprite, this, "alpha", 1);
     */
    function superSetter(currentClass: any, thisObj: any, type: string, ...values: any[]): any;
    
    /**
     * @language zh_CN
     * 获取父类的getter属性值。代替其他语言的写法，如 super.alpha;
     * @param thisObj 当前对象。永远都this
     * @param currentClass 当前 class 类名，非字符串
     * @param type 需要调用的setter属性名称
     * @returns {any} 父类返回的值
     *
     * @exmaple egret.superGetter(egret.Sprite, this, "alpha");
     */
    function superGetter(currentClass: any, thisObj: any, type: string): any;
}
declare module egret {
    
    /**
     * @language zh_CN
     * 返回 name 参数指定的类的类对象引用。
     * @param name 类的名称。
     * @version Egret 2.4
     * @platform Web,Native
     * @includeExample egret/utils/getDefinitionByName.ts
     */
    function getDefinitionByName(name: string): any;
}
declare var __global: any;
declare module egret {
    
    /**
     * @language zh_CN
     * 获取浏览器或者Runtime参数，如果没有设置返回空字符串
     * 在浏览器中相当于获取url中参数，在Runtime获取对应setOption参数
     * @method egret.getOption
     * @param key {string} 参数key
     * @version Egret 2.4
     * @platform Web,Native
     */
    var getOption: (key: string) => string;
}
declare module egret {
    
    /**
     * @language zh_CN
     * 返回对象的完全限定类名。
     * @param value 需要完全限定类名称的对象，可以将任何 JavaScript 值传递给此方法，包括所有可用的 JavaScript 类型、对象实例、原始类型
     * （如number)和类对象
     * @returns 包含完全限定类名称的字符串。
     * @example
     * <pre>
     *  egret.getQualifiedClassName(egret.DisplayObject) //返回 "egret.DisplayObject"
     * </pre>
     * @version Egret 2.4
     * @platform Web,Native
     * @includeExample egret/utils/getQualifiedClassName.ts
     */
    function getQualifiedClassName(value: any): string;
}
declare module egret {
    
    /**
     * @language zh_CN
     * 返回 value 参数指定的对象的基类的完全限定类名。
     * @param value 需要取得父类的对象，可以将任何 JavaScript 值传递给此方法，包括所有可用的 JavaScript 类型、对象实例、原始类型（如number）和类对象
     * @returns 完全限定的基类名称，或 null（如果不存在基类名称）。
     * @example
     * <pre>
     *  egret.getQualifiedSuperclassName(egret.Sprite) //返回 "egret.DisplayObject"
     * </pre>
     * @version Egret 2.4
     * @platform Web,Native
     * @includeExample egret/utils/getQualifiedSuperclassName.ts
     */
    function getQualifiedSuperclassName(value: any): string;
}
declare module egret {
    
    /**
     * @language zh_CN
     * 用于计算相对时间。此方法返回自启动 Egret 框架以来经过的毫秒数。
     * @returns 启动 Egret 框架以来经过的毫秒数。
     * @version Egret 2.4
     * @platform Web,Native
     * @includeExample egret/utils/getTimer.ts
     */
    function getTimer(): number;
}
declare module egret {
    
    /**
     * @language zh_CN
     * 检查指定的应用程序域之内是否存在一个公共定义。该定义可以是一个类、一个命名空间或一个函数的定义。
     * @param name {string} 定义的名称。
     * @returns {boolean} 公共定义是否存在
     * @example
     * egret.hasDefinition("egret.DisplayObject") //返回 true
     * @version Egret 2.4
     * @platform Web,Native
     * @includeExample egret/utils/hasDefinition.ts
     */
    function hasDefinition(name: string): boolean;
}
declare module egret {
    
    /**
     * @language zh_CN
     * 检查指定对象是否为 Egret 框架内指定接口或类或其子类的实例。此方法与使用 instanceOf 关键字相比具有更高的性能，并且能判断接口的实现。
     * @param instance 要判断的实例。
     * @param typeName 类或接口的完全名称.
     * @returns 返回true表示当前对象是指定类或接口的实例。
     * @example
     * <pre>
     *     var instance = new egret.Sprite();
     *     egret.log(egret.is(instance,"egret.Sprite"))  //true
     *     egret.log(egret.is(instance,"egret.DisplayObjectContainer"))  //true
     *     egret.log(egret.is(instance,"egret.Bitmap"))  //false
     * </pre>
     * @see egret.registerClass()
     * @version Egret 2.4
     * @platform Web,Native
     */
    function is(instance: any, typeName: string): boolean;
}
declare module egret {
    
    /**
     * @language zh_CN
     * 注册并启动一个计时器，通常会以60FPS的速率触发回调方法，并传入当前时间戳。注意：注册后将会持续触发回调方法，若要停止回调，需要手动调用stopTick()方法。
     * @param callBack 要执行的回调方法。参数 timeStamp 表示从启动Egret框架开始经过的时间(毫秒)。
     * 若回调方法返回值为true，其作用与TimerEvent.updateAfterEvent()类似，将会忽略帧频限制，在此方法处理完成后立即重绘屏幕。
     * @param thisObject 回调方法的this对象引用。
     * @version Egret 2.4
     * @platform Web,Native
     */
    function startTick(callBack: (timeStamp: number) => boolean, thisObject: any): void;
}
declare module egret {
    
    /**
     * @language zh_CN
     * 停止之前用 startTick() 方法启动的计时器。
     * @param callBack 要执行的回调方法。参数 timeStamp 表示从启动Egret框架开始经过的时间(毫秒)。
     * 若回调方法返回值为true，其作用与TimerEvent.updateAfterEvent()类似，将会忽略帧频限制，在此方法处理完成后立即重绘屏幕。
     * @param thisObject 回调方法的this对象引用。
     * @version Egret 2.4
     * @platform Web,Native
     */
    function stopTick(callBack: (timeStamp: number) => boolean, thisObject: any): void;
}
declare module egret {
    
    /**
     * @language zh_CN
     * 转换数字为颜色字符串
     * @param value {number} 颜色值，例如 0xffffff
     * @returns {string} 颜色字符串，例如"#ffffff"。
     * @version Egret 2.4
     * @platform Web,Native
     * @includeExample egret/utils/toColorString.ts
     */
    function toColorString(value: number): string;
}
declare module egret {
    /**
     * @private
     */
    class WebGLUtils {
        static compileProgram(gl: WebGLRenderingContext, vertexSrc: string, fragmentSrc: string): WebGLProgram;
        static compileFragmentShader(gl: WebGLRenderingContext, shaderSrc: string): WebGLShader;
        static compileVertexShader(gl: WebGLRenderingContext, shaderSrc: string): WebGLShader;
        private static _compileShader(gl, shaderSrc, shaderType);
        private static canUseWebGL;
        static checkCanUseWebGL(): boolean;
        static deleteWebGLTexture(bitmapData: any): void;
    }
}
