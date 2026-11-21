一次性探针：**本地 link 安装的包，客户端半边到底能不能挂进 UI 槽位？**

答案是可以。它只做一件事——往 `shell.overlay` 槽位注册一个右下角红标签。
如果标签出现了，说明客户端 bundle 的加载链路是通的。

留作最小可用的客户端插件模板：`window.__ModuleLoader__.load(...)` 怎么包、`ctx.slots.inject` 怎么写。
