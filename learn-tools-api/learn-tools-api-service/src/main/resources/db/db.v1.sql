/*
 Navicat MySQL Data Transfer

 Source Server         : 132.232.64.127
 Source Server Type    : MySQL
 Source Server Version : 50641
 Source Host           : 132.232.64.127:3306
 Source Schema         : test

 Target Server Type    : MySQL
 Target Server Version : 50641
 File Encoding         : 65001

 Date: 24/09/2018 11:57:22
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for sys_error_info
-- ----------------------------
DROP TABLE IF EXISTS `sys_error_info`;
CREATE TABLE `sys_error_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `error_code` varchar(50) DEFAULT NULL COMMENT '错误码',
  `error_msg` varchar(255) DEFAULT NULL COMMENT '错误信息',
  `create_user` varchar(32) DEFAULT NULL COMMENT '创建人id',
  `create_time` timestamp NULL DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE `test`.`sys_error_info`
ADD UNIQUE INDEX(`error_code`);

-- ----------------------------
-- Table structure for sys_excepton_info
-- ----------------------------
DROP TABLE IF EXISTS `sys_excepton_info`;
CREATE TABLE `sys_excepton_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `controller_name` varchar(50) DEFAULT NULL COMMENT 'Controller名',
  `method_name` varchar(30) DEFAULT NULL COMMENT '方法名',
  `remote_host` varchar(30) DEFAULT NULL COMMENT '请求端ip',
  `parameter_map` varchar(500) DEFAULT NULL COMMENT '请求参数map',
  `query_string` varchar(500) DEFAULT NULL COMMENT '请求参数字符串',
  `remote_port` int(10) DEFAULT NULL COMMENT '请求端端口',
  `user_agent` varchar(255) DEFAULT NULL COMMENT '请求端设备信息',
  `authorization` varchar(255) DEFAULT NULL COMMENT 'token',
  `create_time` timestamp NULL DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Table structure for sys_menu
-- ----------------------------
DROP TABLE IF EXISTS `sys_menu`;
CREATE TABLE `sys_menu` (
  `id` varchar(32) NOT NULL DEFAULT '' COMMENT '菜单主键',
  `text` varchar(50) NOT NULL DEFAULT '' COMMENT '菜单名',
  `type` char(4) NOT NULL DEFAULT '' COMMENT '菜单类型(menu|auth）',
  `url` varchar(50) DEFAULT NULL COMMENT '菜单url',
  `pid` varchar(32) DEFAULT NULL COMMENT '父级菜单id',
  `sort` int(255) NOT NULL DEFAULT '1' COMMENT '序号',
  `create_user_id` varchar(0) DEFAULT NULL COMMENT '创建人id',
  `create_time` timestamp NULL DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of sys_menu
-- ----------------------------
BEGIN;
INSERT INTO `sys_menu` VALUES ('aaaaa', '首页', 'menu', NULL, NULL, 1, NULL, NULL);
INSERT INTO `sys_menu` VALUES ('bbbbb', '数据统计', 'auth', '/auth', 'aaaaa', 1, NULL, NULL);
COMMIT;

-- ----------------------------
-- Table structure for sys_menu_role
-- ----------------------------
DROP TABLE IF EXISTS `sys_menu_role`;
CREATE TABLE `sys_menu_role` (
  `id` int(11) NOT NULL COMMENT '主键id',
  `role_id` varchar(32) DEFAULT NULL COMMENT '角色id',
  `menu_id` varchar(32) DEFAULT NULL COMMENT '菜单id',
  PRIMARY KEY (`id`) USING BTREE,
  KEY `role_id` (`role_id`) USING BTREE,
  KEY `menu_id` (`menu_id`) USING BTREE,
  CONSTRAINT `sys_menu_role_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `sys_role` (`id`),
  CONSTRAINT `sys_menu_role_ibfk_2` FOREIGN KEY (`menu_id`) REFERENCES `sys_menu` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT COMMENT='InnoDB free: 10240 kB; (`menu_id`) REFER `learn_tools/sys_menu`(`id`); (`role_id';

-- ----------------------------
-- Table structure for sys_role
-- ----------------------------
DROP TABLE IF EXISTS `sys_role`;
CREATE TABLE `sys_role` (
  `id` varchar(32) NOT NULL DEFAULT '' COMMENT '角色id',
  `name` varchar(30) DEFAULT NULL COMMENT '角色名',
  `status` char(1) DEFAULT NULL COMMENT '角色状态（0：开启）',
  `create_user_id` varchar(32) DEFAULT NULL COMMENT '创建人id',
  `create_time` timestamp NULL DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of sys_role
-- ----------------------------
BEGIN;
INSERT INTO `sys_role` VALUES ('BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB', '销售岗', '0', NULL, NULL);
COMMIT;

-- ----------------------------
-- Table structure for sys_user
-- ----------------------------
DROP TABLE IF EXISTS `sys_user`;
CREATE TABLE `sys_user` (
  `id` varchar(32) NOT NULL DEFAULT '' COMMENT '用户ID',
  `username` varchar(15) NOT NULL DEFAULT '' COMMENT '用户昵称(用来登录，是唯一不可重复)',
  `password` varchar(32) NOT NULL DEFAULT 'e10adc3949ba59abbe56e057f20f883e' COMMENT '用户名密码（md5加密），默认123456',
  `name` varchar(15) NOT NULL DEFAULT '' COMMENT '用户名',
  `mobile_phone` varchar(11) DEFAULT '' COMMENT '用户手机号',
  `email` varchar(50) DEFAULT NULL COMMENT '用户邮箱',
  `status` char(1) DEFAULT '0' COMMENT '用户状态（0：开启）',
  `update_user_id` varchar(32) DEFAULT NULL COMMENT '上次修改人',
  `update_time` timestamp NULL DEFAULT NULL COMMENT '上次修改时间',
  `create_time` timestamp NULL DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of sys_user
-- ----------------------------
BEGIN;
INSERT INTO `sys_user` VALUES ('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', 'admin', 'e10adc3949ba59abbe56e057f20f883e', '管理员', '', NULL, '0', NULL, NULL, NULL);
COMMIT;

-- ----------------------------
-- Table structure for sys_user_role
-- ----------------------------
DROP TABLE IF EXISTS `sys_user_role`;
CREATE TABLE `sys_user_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键id',
  `user_id` varchar(32) DEFAULT NULL COMMENT '用户id',
  `role_id` varchar(32) DEFAULT NULL COMMENT '角色id',
  `create_time` timestamp NULL DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`) USING BTREE,
  KEY `user_id` (`user_id`) USING BTREE,
  KEY `role_id` (`role_id`) USING BTREE,
  CONSTRAINT `sys_user_role_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `sys_user` (`id`),
  CONSTRAINT `sys_user_role_ibfk_2` FOREIGN KEY (`role_id`) REFERENCES `sys_role` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 ROW_FORMAT=COMPACT COMMENT='InnoDB free: 10240 kB; (`role_id`) REFER `learn_tools/sys_role`(`id`); (`user_id';

-- ----------------------------
-- Records of sys_user_role
-- ----------------------------
BEGIN;
INSERT INTO `sys_user_role` VALUES (1, 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', 'BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB', NULL);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
