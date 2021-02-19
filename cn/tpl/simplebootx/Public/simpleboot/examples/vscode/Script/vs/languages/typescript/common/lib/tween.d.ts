declare module egret {
    
    /**
     * @language zh_CN
     * 缓动函数集合，使用不同的缓动函数使得动画按照对应的方程进行
     * @see http://edn.egret.com/cn/index.php/article/index/id/53 缓动效果演示
     * @version Egret 2.4
     * @platform Web,Native
     */
    class Ease {
        /**
         * @version Egret 2.4
         * @platform Web,Native
         */
        constructor();
        
        /**
         * @language zh_CN
         * get。请查看示例
         * @version Egret 2.4
         * @platform Web,Native
         */
        static get(amount: any): Function;
        
        /**
         * @language zh_CN
         * get pow in。请查看示例
         * @version Egret 2.4
         * @platform Web,Native
         */
        static getPowIn(pow: any): Function;
        
        /**
         * @language zh_CN
         * get pow out。请查看示例
         * @version Egret 2.4
         * @platform Web,Native
         */
        static getPowOut(pow: any): Function;
        
        /**
         * @language zh_CN
         * get pow in out。请查看示例
         * @version Egret 2.4
         * @platform Web,Native
         */
        static getPowInOut(pow: any): Function;
        
        /**
         * @language zh_CN
         * quad in。请查看示例
         * @version Egret 2.4
         * @platform Web,Native
         */
        static quadIn: Function;
        
        /**
         * @language zh_CN
         * quad out。请查看示例
         * @version Egret 2.4
         * @platform Web,Native
         */
        static quadOut: Function;
        
        /**
         * @language zh_CN
         * quad in out。请查看示例
         * @version Egret 2.4
         * @platform Web,Native
         */
        static quadInOut: Function;
        
        /**
         * @language zh_CN
         * cubic in。请查看示例
         * @version Egret 2.4
         * @platform Web,Native
         */
        static cubicIn: Function;
        
        /**
         * @language zh_CN
         * cubic out。请查看示例
         * @version Egret 2.4
         * @platform Web,Native
         */
        static cubicOut: Function;
        
        /**
         * @language zh_CN
         * cubic in out。请查看示例
         * @version Egret 2.4
         * @platform Web,Native
         */
        static cubicInOut: Function;
        
        /**
         * @language zh_CN
         * quart in。请查看示例
         * @version Egret 2.4
         * @platform Web,Native
         */
        static quartIn: Function;
        
        /**
         * @language zh_CN
         * quart out。请查看示例
         * @version Egret 2.4
         * @platform Web,Native
         */
        static quartOut: Function;
        
        /**
         * @language zh_CN
         * quart in out。请查看示例
         * @version Egret 2.4
         * @platform Web,Native
         */
        static quartInOut: Function;
        
        /**
         * @language zh_CN
         * quint in。请查看示例
         * @version Egret 2.4
         * @platform Web,Native
         */
        static quintIn: Function;
        
        /**
         * @language zh_CN
         * quint out。请查看示例
         * @version Egret 2.4
         * @platform Web,Native
         */
        static quintOut: Function;
        
        /**
         * @language zh_CN
         * quint in out。请查看示例
         * @version Egret 2.4
         * @platform Web,Native
         */
        static quintInOut: Function;
        
        /**
         * @language zh_CN
         * sine in。请查看示例
         * @version Egret 2.4
         * @platform Web,Native
         */
        static sineIn(t: any): number;
        
        /**
         * @language zh_CN
         * sine out。请查看示例
         * @version Egret 2.4
         * @platform Web,Native
         */
        static sineOut(t: any): number;
        
        /**
         * @language zh_CN
         * sine in out。请查看示例
         * @version Egret 2.4
         * @platform Web,Native
         */
        static sineInOut(t: any): number;
        
        /**
         * @language zh_CN
         * get back in。请查看示例
         * @version Egret 2.4
         * @platform Web,Native
         */
        static getBackIn(amount: any): Function;
        
        /**
         * @language zh_CN
         * back in。请查看示例
         * @version Egret 2.4
         * @platform Web,Native
         */
        static backIn: Function;
        
        /**
         * @language zh_CN
         * get back out。请查看示例
         * @version Egret 2.4
         * @platform Web,Native
         */
        static getBackOut(amount: any): Function;
        
        /**
         * @language zh_CN
         * back out。请查看示例
         * @version Egret 2.4
         * @platform Web,Native
         */
        static backOut: Function;
        
        /**
         * @language zh_CN
         * get back in out。请查看示例
         * @version Egret 2.4
         * @platform Web,Native
         */
        static getBackInOut(amount: any): Function;
        
        /**
         * @language zh_CN
         * back in out。请查看示例
         * @version Egret 2.4
         * @platform Web,Native
         */
        static backInOut: Function;
        
        /**
         * @language zh_CN
         * circ in。请查看示例
         * @version Egret 2.4
         * @platform Web,Native
         */
        static circIn(t: any): number;
        
        /**
         * @language zh_CN
         * circ out。请查看示例
         * @version Egret 2.4
         * @platform Web,Native
         */
        static circOut(t: any): number;
        
        /**
         * @language zh_CN
         * circ in out。请查看示例
         * @version Egret 2.4
         * @platform Web,Native
         */
        static circInOut(t: any): number;
        
        /**
         * @language zh_CN
         * bounce in。请查看示例
         * @version Egret 2.4
         * @platform Web,Native
         */
        static bounceIn(t: any): number;
        
        /**
         * @language zh_CN
         * bounce out。请查看示例
         * @version Egret 2.4
         * @platform Web,Native
         */
        static bounceOut(t: any): number;
        
        /**
         * @language zh_CN
         * bounce in out。请查看示例
         * @version Egret 2.4
         * @platform Web,Native
         */
        static bounceInOut(t: any): number;
        
        /**
         * @language zh_CN
         * get elastic in。请查看示例
         * @version Egret 2.4
         * @platform Web,Native
         */
        static getElasticIn(amplitude: any, period: any): Function;
        
        /**
         * @language zh_CN
         * elastic in。请查看示例
         * @version Egret 2.4
         * @platform Web,Native
         */
        static elasticIn: Function;
        
        /**
         * @language zh_CN
         * get elastic out。请查看示例
         * @version Egret 2.4
         * @platform Web,Native
         */
        static getElasticOut(amplitude: any, period: any): Function;
        
        /**
         * @language zh_CN
         * elastic out。请查看示例
         * @version Egret 2.4
         * @platform Web,Native
         */
        static elasticOut: Function;
        
        /**
         * @language zh_CN
         * get elastic in out。请查看示例
         * @version Egret 2.4
         * @platform Web,Native
         */
        static getElasticInOut(amplitude: any, period: any): Function;
        
        /**
         * @language zh_CN
         * elastic in out。请查看示例
         * @version Egret 2.4
         * @platform Web,Native
         */
        static elasticInOut: Function;
    }
}
declare module egret {
    
    /**
     * @language zh_CN
     * Tween是Egret的动画缓动类
     * @see http://edn.egret.com/cn/docs/page/576 Tween缓动动画
     * @version Egret 2.4
     * @platform Web,Native
     * @includeExample extension/tween/Tween.ts
     */
    class Tween extends EventDispatcher {
        /**
         * 不做特殊处理
         * @constant {number} egret.Tween.NONE
         * @private
         */
        private static NONE;
        /**
         * 循环
         * @constant {number} egret.Tween.LOOP
         * @private
         */
        private static LOOP;
        /**
         * 倒序
         * @constant {number} egret.Tween.REVERSE
         * @private
         */
        private static REVERSE;
        /**
         * @private
         */
        private static _tweens;
        /**
         * @private
         */
        private static IGNORE;
        /**
         * @private
         */
        private static _plugins;
        /**
         * @private
         */
        private static _inited;
        /**
         * @private
         */
        private _target;
        /**
         * @private
         */
        private _useTicks;
        /**
         * @private
         */
        private ignoreGlobalPause;
        /**
         * @private
         */
        private loop;
        /**
         * @private
         */
        private pluginData;
        /**
         * @private
         */
        private _curQueueProps;
        /**
         * @private
         */
        private _initQueueProps;
        /**
         * @private
         */
        private _steps;
        /**
         * @private
         */
        private _actions;
        /**
         * @private
         */
        private paused;
        /**
         * @private
         */
        private duration;
        /**
         * @private
         */
        private _prevPos;
        /**
         * @private
         */
        private position;
        /**
         * @private
         */
        private _prevPosition;
        /**
         * @private
         */
        private _stepPosition;
        /**
         * @private
         */
        private passive;
        
        /**
         * @language zh_CN
         * 激活一个对象，对其添加 Tween 动画
         * @param target {any} 要激活 Tween 的对象
         * @param props {any} 参数，支持loop(循环播放) onChange(变化函数) onChangeObj(变化函数作用域)
         * @param pluginData {any} 暂未实现
         * @param override {boolean} 是否移除对象之前添加的tween，默认值false。
         * 不建议使用，可使用 Tween.removeTweens(target) 代替。
         * @version Egret 2.4
         * @platform Web,Native
         */
        static get(target: any, props?: any, pluginData?: any, override?: boolean): Tween;
        
        /**
         * @language zh_CN
         * 删除一个对象上的全部 Tween 动画
         * @param target  需要移除 Tween 的对象
         * @version Egret 2.4
         * @platform Web,Native
         */
        static removeTweens(target: any): void;
        
        /**
         * @language zh_CN
         * 暂停某个对象的所有 Tween
         * @param target 要暂停 Tween 的对象
         * @version Egret 2.4
         * @platform Web,Native
         */
        static pauseTweens(target: any): void;
        
        /**
         * @language zh_CN
         * 继续播放某个对象的所有缓动
         * @param target 要继续播放 Tween 的对象
         * @version Egret 2.4
         * @platform Web,Native
         */
        static resumeTweens(target: any): void;
        /**
         * @private
         *
         * @param delta
         * @param paused
         */
        private static tick(timeStamp, paused?);
        private static _lastTime;
        /**
         * @private
         *
         * @param tween
         * @param value
         */
        private static _register(tween, value);
        
        /**
         * @language zh_CN
         * 删除所有 Tween
         * @version Egret 2.4
         * @platform Web,Native
         */
        static removeAllTweens(): void;
        /**
         * 创建一个 egret.Tween 对象
         * @private
         * @version Egret 2.4
         * @platform Web,Native
         */
        constructor(target: any, props: any, pluginData: any);
        /**
         * @private
         *
         * @param target
         * @param props
         * @param pluginData
         */
        private initialize(target, props, pluginData);
        /**
         * @private
         *
         * @param value
         * @param actionsMode
         * @returns
         */
        private setPosition(value, actionsMode?);
        /**
         * @private
         *
         * @param startPos
         * @param endPos
         * @param includeStart
         */
        private _runActions(startPos, endPos, includeStart?);
        /**
         * @private
         *
         * @param step
         * @param ratio
         */
        private _updateTargetProps(step, ratio);
        
        /**
         * @language zh_CN
         * 设置是否暂停
         * @param value {boolean} 是否暂停
         * @returns Tween对象本身
         * @version Egret 2.4
         * @platform Web,Native
         */
        setPaused(value: boolean): Tween;
        /**
         * @private
         *
         * @param props
         * @returns
         */
        private _cloneProps(props);
        /**
         * @private
         *
         * @param o
         * @returns
         */
        private _addStep(o);
        /**
         * @private
         *
         * @param o
         * @returns
         */
        private _appendQueueProps(o);
        /**
         * @private
         *
         * @param o
         * @returns
         */
        private _addAction(o);
        /**
         * @private
         *
         * @param props
         * @param o
         */
        private _set(props, o);
        
        /**
         * @language zh_CN
         * 等待指定毫秒后执行下一个动画
         * @param duration {number} 要等待的时间，以毫秒为单位
         * @param passive {boolean} 等待期间属性是否会更新
         * @returns Tween对象本身
         * @version Egret 2.4
         * @platform Web,Native
         */
        wait(duration: number, passive?: boolean): Tween;
        
        /**
         * @language zh_CN
         * 将指定对象的属性修改为指定值
         * @param props {Object} 对象的属性集合
         * @param duration {number} 持续时间
         * @param ease {egret.Ease} 缓动算法
         * @returns {egret.Tween} Tween对象本身
         * @version Egret 2.4
         * @platform Web,Native
         */
        to(props: any, duration?: number, ease?: Function): Tween;
        
        /**
         * @language zh_CN
         * 执行回调函数
         * @param callback {Function} 回调方法
         * @param thisObj {any} 回调方法this作用域
         * @param params {Array<any>} 回调方法参数
         * @returns {egret.Tween} Tween对象本身
         * @version Egret 2.4
         * @platform Web,Native
         * @example
         * <pre>
         *  egret.Tween.get(display).call(function (a:number, b:string) {
         *      console.log("a: " + a); //对应传入的第一个参数 233
         *      console.log("b: " + b); //对应传入的第二个参数 “hello”
         *  }, this, [233, "hello"]);
         * </pre>
         */
        call(callback: Function, thisObj?: any, params?: Array<any>): Tween;
        /**
         * Now modify the properties of the specified object to the specified value
         * @param props {Object} Property set of an object
         * @param target The object whose Tween to be resumed
         * @returns {egret.Tween} Tween object itself
         * @version Egret 2.4
         * @platform Web,Native
         */
        /**
         * 立即将指定对象的属性修改为指定值
         * @param props {Object} 对象的属性集合
         * @param target 要继续播放 Tween 的对象
         * @returns {egret.Tween} Tween对象本身
         * @version Egret 2.4
         * @platform Web,Native
         */
        set(props: any, target?: any): Tween;
        
        /**
         * @language zh_CN
         * 执行
         * @param tween {egret.Tween} 需要操作的 Tween 对象，默认this
         * @returns {egret.Tween} Tween对象本身
         * @version Egret 2.4
         * @platform Web,Native
         */
        play(tween?: Tween): Tween;
        
        /**
         * @language zh_CN
         * 暂停
         * @param tween {egret.Tween} 需要操作的 Tween 对象，默认this
         * @returns {egret.Tween} Tween对象本身
         * @version Egret 2.4
         * @platform Web,Native
         */
        pause(tween?: Tween): Tween;
        /**
         * @method egret.Tween#tick
         * @param delta {number}
         * @private
         * @version Egret 2.4
         * @platform Web,Native
         */
        tick(delta: number): void;
    }
}
