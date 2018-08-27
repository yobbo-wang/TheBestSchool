package wang.yobbo.common.util;

import org.ho.yaml.Yaml;

import java.util.HashMap;

/**
 * 读取YAML文件
 */
public class YamlFileUtil {
    private static YamlFileUtil yamlFileUtil = null;
    private String name ;

    private YamlFileUtil(String name){
        this.name = name;
    }
    public static synchronized YamlFileUtil getInstance(String name) {
        if(yamlFileUtil == null){
            yamlFileUtil = new YamlFileUtil(name);
        }
        return yamlFileUtil;
    }

    public String get(String key){
        try{
            HashMap hashMap = Yaml.loadType(Thread.currentThread().getContextClassLoader().getResourceAsStream(name), HashMap.class);
            String[] keys = key.split("\\.") ;
            for(int i=0;i<keys.length;i++){
                if(i == keys.length -1){
                   return hashMap.get(keys[i]).toString();
                }
                hashMap = (HashMap)hashMap.get(keys[i]);
            }
            return "";
        }catch (Exception e){
            return new String();
        }
    }
}
