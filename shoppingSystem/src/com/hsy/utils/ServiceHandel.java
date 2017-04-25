package com.hsy.utils;

import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.Enumeration;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.hsy.base.BaseService;
import com.hsy.beanFactory.BeanFactory;
import com.hsy.service.CommodityService;
import com.hsy.service.OrderDetailService;
import com.hsy.service.ShoppingCartService;
import com.hsy.service.UserService;

import net.sf.json.JSONObject;

/**
 * 通过放射执行service的方法
 * @author haitang
 *
 */
public class ServiceHandel {

	private static UserService userService = BeanFactory.getInstance(UserService.class);
	private static CommodityService commodityService = BeanFactory.getInstance(CommodityService.class);
	private static OrderDetailService orderDetailService = BeanFactory.getInstance(OrderDetailService.class);
	private static ShoppingCartService shoppingCartService = BeanFactory.getInstance(ShoppingCartService.class);

	/**
	 * 通过放射执行service的方法
	 * 
	 * @param request
	 * @param response
	 * @return
	 */
	public static String ServiceHandel(HttpServletRequest request, HttpServletResponse response) {
		
		String methodName=request.getParameter("method");
		String serviceName=request.getParameter("service");
		BaseService baseService =getService(serviceName);
		Class<? extends BaseService> clazz = baseService.getClass();
		String dataRes=null;
		
		Method method;
		try {
			method = clazz.getDeclaredMethod(methodName, HttpServletRequest.class, HttpServletResponse.class);
			if (null != method) {
				dataRes= (String) method.invoke(baseService, request, response);
			}
		} catch (NoSuchMethodException e) {
			e.printStackTrace();
		} catch (SecurityException e) {
			e.printStackTrace();
		} catch (IllegalAccessException e) {
			e.printStackTrace();
		} catch (IllegalArgumentException e) {
			e.printStackTrace();
		} catch (InvocationTargetException e) {
			e.printStackTrace();
		}
		return dataRes;
	}
	
	/**
	 * 得到请求的service
	 * @param request
	 * @return
	 */
	private static BaseService getService(String serviceName) {
		BaseService baseService = null;
		if (serviceName.equals("userService")) {
			baseService = userService;
		} else if (serviceName.equals("commodityService")) {
			baseService = commodityService;
		} else if (serviceName.equals("detailService")) {
			baseService = orderDetailService;
		} else if (serviceName.equals("shoppingCartService")) {
			baseService = shoppingCartService;
		}
		return baseService;
	}
}
